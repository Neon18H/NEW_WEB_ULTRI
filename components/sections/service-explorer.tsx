"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceCategories, serviceFilters } from "@/lib/services";

export function ServiceExplorer() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = ["Todos", ...serviceFilters];

  const servicesByCategory = useMemo(() => {
    return serviceCategories.reduce<Record<string, typeof serviceCategories[0]>>(
      (acc, category) => {
        acc[category.id] = category;
        return acc;
      },
      {}
    );
  }, []);

  return (
    <div className="space-y-10">
      <Tabs defaultValue="ia">
        <TabsList className="flex-wrap">
          {serviceCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() =>
                setActiveFilter(filter === "Todos" ? null : filter)
              }
              className={`rounded-full border px-3 py-1 text-xs transition focus-ring ${
                activeFilter === filter || (filter === "Todos" && !activeFilter)
                  ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-6 md:grid-cols-2">
              {servicesByCategory[category.id].services
                .filter((service) =>
                  activeFilter ? service.filters.includes(activeFilter) : true
                )
                .map((service) => (
                  <Card key={service.slug} className="h-full">
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-slate-300">
                        {service.description}
                      </p>
                      <ul className="space-y-2 text-xs text-slate-400">
                        {service.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="subtle">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        href={`/servicios/${service.category}/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 hover:text-cyan-100"
                      >
                        Ver detalle <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
