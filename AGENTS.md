# AGENTS.md — Thailand Transfer Guide (TTG)

## Stack
Sprawdź package.json przed pracą — tu jest źródło prawdy o stacku.

## Zasady dla agentów AI

### Zawsze
- Czytaj `jarvis/current-task.md` — tam jest aktualne zadanie od Jarvisa
- Pracujesz na izolowanym branchu w worktree — nie wykonuj `git push`
- Po zmianach uruchom: `npx tsc --noEmit` i `npm run build`
- Jeśli testy istnieją: `npx vitest run`

### Nigdy
- Nie zmieniaj designu — DESIGN JEST ZABLOKOWANY
- Nie zmieniaj kolorów, czcionek, układu stron, stylów CSS/Tailwind
- Nie zmieniaj komponentów UI bez wyraźnej zgody w zadaniu
- Nie dodawaj nowych zależności bez uzasadnienia w zadaniu
- Nie zmieniaj konfiguracji buildu
- Nie hardkoduj danych (ceny, trasy, godziny)
- Nie commituj zmian — Jarvis zarządza gitem

### Design — ZABLOKOWANY
- Żadne zmiany wizualne nie są dozwolone
- Jeśli zadanie wymaga zmiany designu — STOP, zgłoś to Jarvisowi
- Wyjątek tylko jeśli zadanie zawiera wyraźny zapis: "zmiana designu zatwierdzona"

## Weryfikacja zmian
Po każdej sesji podaj:
1. Listę zmienionych plików
2. Co dokładnie zmieniono i dlaczego
3. Potwierdzenie: czy zmieniałem cokolwiek wizualnego? (TAK/NIE)
4. Wynik `npx tsc --noEmit`
5. Wynik `npm run build`
