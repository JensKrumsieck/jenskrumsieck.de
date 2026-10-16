<script lang="ts">
    import geoJson from "#lib/assets/districts.geojson?raw";
    import { onMount, onDestroy } from "svelte";
    import "leaflet/dist/leaflet.css";
    let geoJson_data = JSON.parse(geoJson);
    let mapEl: HTMLDivElement;
    let map: any;
    let width = $state(600);

    $effect(() => {
        width;
        map?.invalidateSize();
    });

    let maxWidth = 600;
    let height = 600;

    let destroyed = false;
    onDestroy(() => {
        destroyed = true;
        map?.remove();
        map = undefined;
    });

    onMount(async () => {
        const L = (await import("leaflet")).default;
        if (destroyed) return;
        map = L.map(mapEl, {
            zoomSnap: 0.1,
            maxBoundsViscosity: 1.0,
            scrollWheelZoom: false,
        });
        map.on("focus", function () {
            map.scrollWheelZoom.enable();
        });
        map.on("blur", function () {
            map.scrollWheelZoom.disable();
        });

        L.tileLayer("https://api.jenskrumsieck.de/openstreetmap/{s}/{z}/{x}/{y}.png", {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> | Datenquelle: Stadt Braunschweig - Open GeoData, 2026, <a href="https://www.govdata.de/dl-de/by-2-0">dl-de/by-2-0</a> (verändert)',
        }).addTo(map);

        const layer = L.geoJSON(geoJson_data, {
            style: (feature) => {
                const beznum = String(feature?.properties.BEZNUM);
                const isTarget = beznum.startsWith("22");
                return {
                    color: "#005538",
                    weight: 2,
                    fillColor: isTarget ? "#005538" : "#008939",
                    fillOpacity: isTarget ? 0.8 : 0.2,
                };
            },
        }).addTo(map);

        const bounds = layer.getBounds();
        map.fitBounds(bounds);

        map.setMaxBounds(bounds);
        map.setMinZoom(map.getZoom());
    });
</script>

<div class="flex w-full justify-center">
    <div bind:clientWidth={width} style="width: 100%; max-width: {maxWidth}px;">
        <div bind:this={mapEl} style="width: 100%; height: {height}px;"></div>
    </div>
</div>
