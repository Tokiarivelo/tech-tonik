import CreatePageButton from "@/components/CreatePageButton/CreatePageButton";
import PageGallery from "@/components/GalleryUser/GalleryUser";
import NavbarUser from "@/components/NavbarUser/NavbarUser";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white font-sans">
      <NavbarUser />
      <section className="pt-24 px-4">
        <PageGallery />
      </section>
      <footer className="py-12 text-center">
        <CreatePageButton />
      </footer>
    </main>
  );
}