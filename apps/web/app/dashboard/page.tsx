import CreatePageButton from "@/components/dashboard/CreatePageButton/CreatePageButton";
import PageGallery from "@/components/dashboard/GalleryUser/GalleryUser";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <section className="pt-8 px-4 max-w-7xl mx-auto">
        <PageGallery />
      </section>
      <CreatePageButton />
    </div>
  );
}