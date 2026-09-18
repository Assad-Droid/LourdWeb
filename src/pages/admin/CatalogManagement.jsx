import { useCallback, useEffect, useState } from "react";
import { createAdminCatalog, deleteAdminCatalog, getAdminCatalog, resolveAdminImageUrl, updateAdminCatalog, uploadAdminImage } from "../../api/adminApi";

const emptyForm = { code: "", name: "", description: "", price: "", imageUrl: "", imageUrlTwo: "", imageUrlThree: "", imageUrlFour: "", featured: false };

function Field({ label, name, type = "text", value, onChange, required = true }) {
  return <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">{label}<input name={name} type={type} value={value} onChange={onChange} required={required} className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-normal normal-case tracking-normal outline-none focus:border-pink-400" /></label>;
}

function ImageField({ label, current, file, onChange, required }) {
  return <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">{label}<input type="file" accept="image/*" onChange={(event) => onChange(event.target.files?.[0] || null)} required={required} className="mt-2 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-normal normal-case tracking-normal file:mr-3 file:rounded-md file:border-0 file:bg-pink-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-pink-700" />{file ? <span className="mt-1 block text-xs text-emerald-600">{file.name}</span> : current && <img src={resolveAdminImageUrl(current)} alt="Current" className="mt-2 h-16 w-16 rounded-lg object-cover" />}</label>;
}

function CropDialog({ file, ratio, onCancel, onCrop }) {
  const [previewUrl, setPreviewUrl] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [cropError, setCropError] = useState("");
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      // FileReader avoids revoked object URLs in React strict development mode.
      setPreviewUrl(String(reader.result));
      setIsReady(false);
      setCropError("");
    };
    reader.onerror = () => setCropError("This image could not be previewed. Please choose another image.");
    reader.readAsDataURL(file);
  }, [file]);

  const crop = () => {
    setCropError("");
    const image = new Image();
    image.onload = () => {
      const sourceRatio = image.width / image.height;
      let sourceWidth = image.width;
      let sourceHeight = image.height;
      if (sourceRatio > ratio) sourceWidth = image.height * ratio;
      else sourceHeight = image.width / ratio;
      sourceWidth /= zoom;
      sourceHeight /= zoom;
      const sourceX = (image.width - sourceWidth) / 2;
      const sourceY = (image.height - sourceHeight) / 2;
      const outputWidth = 1200;
      const outputHeight = Math.round(outputWidth / ratio);
      const canvas = document.createElement("canvas");
      canvas.width = outputWidth;
      canvas.height = outputHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        setCropError("Your browser could not prepare this image.");
        return;
      }
      context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, outputWidth, outputHeight);
      canvas.toBlob((blob) => {
        if (!blob) {
          setCropError("The crop could not be created. Please try another image.");
          return;
        }
        onCrop(new File([blob], file.name.replace(/\.[^.]+$/, "") + "-cropped.jpg", { type: "image/jpeg" }));
      }, "image/jpeg", 0.9);
    };
    image.onerror = () => setCropError("This image format cannot be cropped in the browser. Try JPG or PNG.");
    image.src = previewUrl;
  };

  if (!file) return null;
  return <div className="fixed inset-0 z-80 flex items-center justify-center bg-[#281923]/60 p-4" role="dialog" aria-modal="true" aria-labelledby="crop-title">
    <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">Frame image</p><h2 id="crop-title" className="mt-2 text-xl font-semibold">Adjust this photo</h2></div><button type="button" onClick={onCancel} className="text-2xl leading-none text-gray-400" aria-label="Close">&times;</button></div>
      <p className="mt-2 text-sm text-gray-500">The photo will be cropped to fit the selected service frame.</p>
      <div className="mt-5 flex justify-center rounded-xl bg-[#f8eef2] p-4"><div className="relative overflow-hidden rounded-xl bg-gray-200" style={{ width: ratio < 1 ? 220 : 260, aspectRatio: ratio }}>{previewUrl && <img src={previewUrl} alt="Crop preview" onLoad={() => setIsReady(true)} onError={() => setCropError("This image format cannot be previewed. Try JPG or PNG.")} className="h-full w-full object-cover" style={{ transform: `scale(${zoom})` }} />}{!isReady && !cropError && <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">Loading image...</span>}</div></div>
      <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-gray-500">Zoom<input type="range" min="1" max="3" step="0.05" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} className="mt-3 w-full accent-pink-600" /></label>
      {cropError && <p className="mt-3 rounded-lg bg-red-50 p-3 text-xs text-red-700">{cropError}</p>}
      <div className="mt-5 flex justify-end gap-2"><button type="button" onClick={onCancel} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600">Cancel</button><button type="button" onClick={crop} disabled={!isReady} className="rounded-lg bg-[#3b2434] px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Use cropped image</button></div>
    </div>
  </div>;
}

export default function CatalogManagement({ kind, title, eyebrow }) {
  const isService = kind === "services";
  const [items, setItems] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");
  const [files, setFiles] = useState({ imageUrl: null, imageUrlTwo: null, imageUrlThree: null, imageUrlFour: null });
  const [cropRequest, setCropRequest] = useState(null);

  const load = useCallback(() => getAdminCatalog(kind).then(setItems).catch((e) => setError(e.message)), [kind]);
  useEffect(() => { load(); }, [load]);

  const change = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    let imageUrls = { imageUrl: form.imageUrl, imageUrlTwo: form.imageUrlTwo, imageUrlThree: form.imageUrlThree, imageUrlFour: form.imageUrlFour };
    try {
      for (const imageKey of Object.keys(imageUrls)) {
        if (files[imageKey]) imageUrls[imageKey] = await uploadAdminImage(files[imageKey]);
      }
    } catch (e) { setError(e.message); return; }
    const payload = {
      code: isService ? null : form.code,
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      durationMinutes: null,
      imageUrl: imageUrls.imageUrl?.trim(),
      imageUrlTwo: isService ? imageUrls.imageUrlTwo?.trim() : null,
      imageUrlThree: isService ? imageUrls.imageUrlThree?.trim() : null,
      imageUrlFour: isService ? imageUrls.imageUrlFour?.trim() : null,
      featured: isService ? form.featured : false,
    };
    try {
      if (editing) await updateAdminCatalog(kind, editing, payload);
      else await createAdminCatalog(kind, payload);
      setForm(emptyForm);
      setFiles({ imageUrl: null, imageUrlTwo: null, imageUrlThree: null, imageUrlFour: null });
      setEditing(null);
      await load();
    } catch (e) { setError(e.message); }
  };

  const edit = (item) => {
    setEditing(item.id);
    setFiles({ imageUrl: null, imageUrlTwo: null, imageUrlThree: null, imageUrlFour: null });
    setForm({ code: item.code || "", name: item.name, description: item.description, price: item.price, imageUrl: item.imageUrl, imageUrlTwo: item.imageUrlTwo || "", imageUrlThree: item.imageUrlThree || "", imageUrlFour: item.imageUrlFour || "", featured: Boolean(item.featured) });
  };

  const remove = async (id) => {
    if (!window.confirm("Remove this item from the public catalog?")) return;
    try { await deleteAdminCatalog(kind, id); await load(); } catch (e) { setError(e.message); }
  };

  const cancelEdit = () => { setEditing(null); setForm(emptyForm); setFiles({ imageUrl: null, imageUrlTwo: null, imageUrlThree: null, imageUrlFour: null }); };
  const chooseFile = (name, file) => {
    if (!file) return;
    setCropRequest({ name, file, ratio: isService && name === "imageUrl" ? 4 / 5 : 1 });
  };
  const finishCrop = (file) => {
    setFiles((current) => ({ ...current, [cropRequest.name]: file }));
    setCropRequest(null);
  };

  return <>
    <header><p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">{eyebrow}</p><h1 className="mt-3 text-4xl font-semibold">{title}</h1><p className="mt-3 text-gray-500">{isService ? "Create services and choose up to three to feature across the site." : "Manage the items currently supported by your booking catalog."}</p></header>
    {error && <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
    <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="space-y-3">
        {!items ? <p className="text-sm text-gray-500">Loading catalog...</p> : items.length === 0 ? <p className="rounded-2xl border border-dashed border-[#d8cbc5] p-10 text-center text-sm text-gray-500">Nothing here yet.</p> : items.map((item) => <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-[#e7dfda] bg-white p-4 shadow-sm">
          <img src={resolveAdminImageUrl(item.imageUrl)} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
          <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="font-semibold text-gray-900">{item.name}</p>{isService && item.featured && <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-pink-700">Featured</span>}</div><p className="mt-1 truncate text-sm text-gray-500">{item.description}</p><p className="mt-2 text-sm font-semibold text-pink-700">₪{item.price}</p></div>
          <div className="flex shrink-0 gap-2"><button type="button" onClick={() => edit(item)} className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:border-pink-300 hover:text-pink-700">Edit</button><button type="button" onClick={() => remove(item.id)} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50">Delete</button></div>
        </div>)}
      </div>
      <form onSubmit={submit} className="h-fit rounded-2xl border border-[#e7dfda] bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">{editing ? "Edit item" : "Add item"}</p><h2 className="mt-2 text-xl font-semibold">{isService ? "Service details" : "Catalog details"}</h2>
        {!isService && <div className="mt-5"><Field label="Code" name="code" value={form.code} onChange={change} /></div>}
        <div className="mt-5 space-y-4"><Field label="Name" name="name" value={form.name} onChange={change} /><Field label="Description" name="description" value={form.description} onChange={change} /><Field label="Price" name="price" type="number" value={form.price} onChange={change} />{isService ? <><ImageField label="Main image" current={form.imageUrl} file={files.imageUrl} onChange={(file) => chooseFile("imageUrl", file)} required={!editing && !form.imageUrl} /><ImageField label="Mini image 1" current={form.imageUrlTwo} file={files.imageUrlTwo} onChange={(file) => chooseFile("imageUrlTwo", file)} /><ImageField label="Mini image 2" current={form.imageUrlThree} file={files.imageUrlThree} onChange={(file) => chooseFile("imageUrlThree", file)} /><ImageField label="Mini image 3" current={form.imageUrlFour} file={files.imageUrlFour} onChange={(file) => chooseFile("imageUrlFour", file)} /></> : <ImageField label="Image" current={form.imageUrl} file={files.imageUrl} onChange={(file) => chooseFile("imageUrl", file)} required={!editing && !form.imageUrl} />}</div>
        {isService && <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-pink-100 bg-pink-50/50 p-3 text-sm text-gray-700"><input type="checkbox" name="featured" checked={form.featured} onChange={change} className="mt-0.5 h-4 w-4 accent-pink-600" /><span><span className="block font-semibold">Feature this service</span><span className="mt-1 block text-xs leading-5 text-gray-500">Featured services appear in the top three on the home page and first in booking. Maximum 3.</span></span></label>}
        <div className="mt-6 flex gap-2"><button type="submit" className="flex-1 rounded-lg bg-[#3b2434] px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-800">{editing ? "Save changes" : "Add item"}</button>{editing && <button type="button" onClick={cancelEdit} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">Cancel</button>}</div>
      </form>
    </div>
    {cropRequest && <CropDialog file={cropRequest.file} ratio={cropRequest.ratio} onCancel={() => setCropRequest(null)} onCrop={finishCrop} />}
  </>;
}
