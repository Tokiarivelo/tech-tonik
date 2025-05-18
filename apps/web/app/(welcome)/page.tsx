import Acceuil from "@/components/home/acceuil"
import Reviews from "@/components/home/reviews"

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Section Accueil avec conteneur pour contrôler le débordement */}
            <section className="relative w-full overflow-hidden">
                <Acceuil />
            </section>


            {/* Séparateur visuel (optionnel) */}
            <div className="w-full h-px"></div>

            {/* Section Reviews avec fond blanc */}
            <section className="relative w-full overflow-hidden bg-white min-h-screen">
                <Reviews />
            </section>
        </div>
    )
}

export default HomePage