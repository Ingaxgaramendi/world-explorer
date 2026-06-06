import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,region")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 12))); // Limitamos a 12 para que no explote la pantalla de inicio
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* SECCIÓN HERO */}
      <section className="text-center py-12 bg-muted rounded-lg space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          🌎 World Explorer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubre información detallada, banderas y regiones de todos los
          países del mundo en una sola interfaz moderna.
        </p>
      </section>

      {/* LISTADO DE LA API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country, idx) => (
          <Card key={idx} className="overflow-hidden">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="w-full h-40 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg">{country.name.common}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
