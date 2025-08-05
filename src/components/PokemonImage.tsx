export default function PokemonImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="w-52 h-52 object-contain" />
    </div>
  )
}