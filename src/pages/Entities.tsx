import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Entities() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,region")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Listado de Entidades (Países)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, idx) => (
          <Card key={idx} className="flex flex-col justify-between">
            <CardHeader>
              {/* Propiedad 1: Nombre */}
              <CardTitle>
                {country.name.official || country.name.common}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Propiedad 2: Bandera */}
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-24 h-16 object-cover rounded border"
              />
              {/* Propiedad 3: Región */}
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Región:</span>{" "}
                {country.region}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
