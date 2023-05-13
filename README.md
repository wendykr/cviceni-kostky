# Cvičení: Interaktivní komponenty

## 2. Kostky 1

V tomto cvičení vyrobíme stránku s několika hracími kostkami. Budeme chtít, abychom mohli hodit každou kostkou zvlášť.

- Vytvořte si repozitář ze šablony [cviceni-kostky](https://github.com/Czechitas-podklady-WEB/cviceni-kostky) s hracími kostkami.
- Spusťte aplikaci pomocí `npx serve` a prohlédněte si, jak vypadá.
- Podle vzoru uvedeného v souboru `index.html` vytvořte v oddělené složce komponentu `Dice`. Komponenta bude vracet DOM element `div` (se třídou `dice`) tak, jako jsme se učili v lekci. Uvnitř bude `div` zobrazující číslo a `button` s textem „hodit“, jako je to ve vzorovém `index.html`. Zatím nastavte (pomocí třídy) číslo, jaké si vyberete.
- Do složky komponenty přesuňte patřičné styly a obrázky související s komponentou a komponentu také správně exportujte.
- Zakomentujte v `index.html` kostky v HTML kódu.
- Vložte JavaScriptem v `index.js` na stránku několik kostek s použitím komponenty `Dice`. Všechny kostky zatím budou mít vámi zvolené číslo.
- Upravte komponentu `Dice` tak, že bude ve svých *props* očekávat vlastnost `side`, která udává číslo zobrazené na kostce. Číslo v property `side` použijete pro nastavení třídy `dice__side--X` (místo `X` bude hodnota `side`) vnitřního `div`u s třídou `dice__side`, který zobrazuje číslo.
- Upravte kód v `index.js` tak, aby na zobrazených kostkách byla různá čísla.
- Upravte komponentu Dice tak, aby se při kliknutí na tlačítko *hodit* vypsalo náhodné číslo (zatím) do konzole. K vygenerování náhodného čísla využijte již připravenou funkci `roll`, kterou si můžete z hlavního `indexu.js` přesunout do komponenty `Dice`.
- Upravte komponentu tak, aby se při kliknutí na tlačítko změnilo číslo zobrazené na kostce – aby byla nastavena správná třída `dice__side--X` (místo X bude náhodné číslo). Postupovat můžete např. tak, že odstraníte všechny třídy `dice__side--1` až `dice__side--6` a nakonec nastavíte jednu třídu odpovídající náhodnému číslu.