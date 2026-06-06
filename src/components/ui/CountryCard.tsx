import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe2, MapPin } from "lucide-react"; // npm i lucide-react si no lo tenés

// Definimos la interfaz tipada al estilo estricto de TypeScript
interface CountryCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  name: string;
  officialName?: string;
  flagUrl: string;
  region: string;
  subregion?: string;
}

export const CountryCard = React.forwardRef<HTMLDivElement, CountryCardProps>(
  (
    { className, name, officialName, flagUrl, region, subregion, ...props },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-muted-foreground/30 group"
        {...props}
      >
        {/* Contenedor de la bandera con un sutil efecto hover zoom */}
        <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
          <img
            src={flagUrl}
            alt={`Bandera de ${name}`}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <CardHeader className="p-4 space-y-1">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold tracking-tight line-clamp-1">
              {name}
            </CardTitle>
            <Badge variant="secondary" className="font-medium shrink-0">
              {region}
            </Badge>
          </div>
          {officialName && (
            <CardDescription className="text-xs line-clamp-1">
              {officialName}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="p-4 pt-0 text-sm space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe2 className="h-4 w-4 text-primary/70 shrink-0" />
            <span className="line-clamp-1">
              <span className="font-medium text-foreground">Continente:</span>{" "}
              {region}
            </span>
          </div>
          {subregion && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary/70 shrink-0" />
              <span className="line-clamp-1">
                <span className="font-medium text-foreground">Región:</span>{" "}
                {subregion}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
);

CountryCard.displayName = "CountryCard";
