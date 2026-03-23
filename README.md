# Katalog interaktywny (InteractiveCatalog)

Prosta aplikacja demo w React: responsywny schemat techniczny z interaktywnymi punktami (hotspotami). Po kliknięciu numeru otwiera się profil części z danymi katalogowymi.

## Stos techniczny

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS** (v4, plugin `@tailwindcss/vite`)
- **React Router** (widok schematu i profilu części)

## Wymagania

- Node.js (zalecane LTS) oraz npm

## Instalacja i uruchomienie

```bash
npm install
npm run dev
```

Aplikacja domyślnie działa pod adresem wskazanym w terminalu (np. `http://localhost:5173`).

## Skrypty

| Skrypt | Opis |
|--------|------|
| `npm run dev` | Serwer deweloperski (HMR) |
| `npm run build` | Kompilacja TypeScript + build produkcyjny do `dist/` |
| `npm run preview` | Podgląd buildu produkcyjnego |
| `npm run lint` | ESLint |

## Konfiguracja treści

### Schemat obrazu

Plik graficzny powinien znajdować się w **`public/schemat.png`**. Zastąp go własnym rysunkiem — ścieżka w kodzie to `/schemat.png`.

### Dane części i pozycje hotspotów

Edytuj **`src/data/partsData.ts`**:

- `id` — numer zgodny z oznaczeniem na rysunku
- `name` — nazwa części
- `catalogNumber` — numer katalogowy
- `leftPercent` / `topPercent` — pozycja punktu w procentach (0–100) względem szerokości i wysokości obrazka

## Struktura (ważniejsze pliki)

```
src/
  App.tsx                 — trasy (/, /part/:id)
  components/
    InteractiveCatalog.tsx — schemat + hotspoty
    PartProfile.tsx        — szczegóły części
  data/
    partsData.ts          — dane części
public/
  schemat.png             — obraz schematu
```

## Zachowanie UI

- Schemat ma `width: 100%` (klasa `w-full`), obraz skaluje się responsywnie.
- Hotspoty są pozycjonowane procentowo, więc pozostają zgodne z obrazem przy zmianie rozmiaru okna.
- Po powrocie ze strony profilu link zawiera `?selected=<id>`, aby podświetlić wybrany punkt na schemacie.

## Licencja

Projekt prywatny (`"private": true` w `package.json`).
