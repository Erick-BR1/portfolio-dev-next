import GallerySlider from "@/app/components/gallerySlider";

export default function Certificados() {
  return (
    <div>
      <article>
        <div>
          <p className="text-white font-goldman font-bold text-lg flex justify-center pt-[136px] pb-[71px]">
            Certificados
          </p>
        </div>
        <section className="flex justify-evenly flex-wrap gap-4 gap-y-16 pb-[70px]">
          <div className="relative min-w-max duration-300 rounded-lg rounded-bl-2xl shadow-lg shadow-white/50 hover:scale-105">
            <GallerySlider />
          </div>
        </section>
      </article>
    </div>
  );
}
