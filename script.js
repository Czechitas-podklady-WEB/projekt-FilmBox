console.log('Funguju!')

const filmy = [
	{
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '18. 12. 2013',
	},
	{
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '19. 11. 2019',
	},
]

/*
Úkol
Vypiš na úvodní stránce filmy z javascriptového pole.
- Vyhledej na stránce prvek s id `seznam-filmu`.
- Pomocí smyčky projdi všechny filmy v poli `filmy`.
- Pomocí interpolace řetězců slož HTML pro každý film do následujícího formátu. Na patřičná místa dosaď vlastnosti `nazev`, `ochutnavka` a `plakat`.
	```html
	<div class="col">
		<div class="card">
			<img
				src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
				width="780"
				height="520"
				class="card-img-top"
				alt="Hollywood Sign on The Hill"
			/>
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					This is a longer card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</p>
				<a href="film.html" class="btn btn-primary">Přehrát</a>
			</div>
		</div>
	</div>
	```
- Vzhledem k tomu, že `script.js` se používá i na podstránkách bez seznamu filmů, bez prvku `#seznam-filmu`, může se stát, že tvůj kód bude zobrazovat chybu ve vývojářských nástrojích například na detailu `film.html`. Obal tvůj kód tedy podmínkou, ať se pouští pouze v případě, že se v HTML aktuální stránky `#seznam-filmu` nachází.
- Ukázkové filmy vepsané přímo do souboru `index.html` umažte. Nejsou potřeba, když se teď o výpis stará JavaScript.
*/
const seznamFilmuElement = document.querySelector('#seznam-filmu')
if (seznamFilmuElement) {
	filmy.forEach((film) => {
		seznamFilmuElement.innerHTML += `
			<div class="col">
				<div class="card">
					<img
						src="${film.plakat.url}"
						width="${film.plakat.width}"
						height="${film.plakat.height}"
						class="card-img-top"
						alt="plakát"
					/>
					<div class="card-body">
						<h5 class="card-title">${film.nazev}</h5>
						<p class="card-text">
						${film.ochutnavka}
						</p>
						<a href="film.html?#${film.id}" class="btn btn-primary">Přehrát</a>
					</div>
				</div>
			</div>
		`
	})
}

/*
Úkol
Na stránce s detailem filmu zobraz příslušné informace.
- Nejdříve v přechozím kódu pro úvodní obrazovku uprav odkaz `href` tak, aby obsahoval identifikátor konkrétního filmu. Nápověda: `<a href="film.html?#${film.id}"`>Přehrát</a>. Díky tomu pak na detailu bude možné zjistit, který konkrétní film si chce uživatel pustit.
- Zařiď, aby se následující kód vykonal pouze v případě, že na stránce je prvek s id `detail-filmu`.
- Zjisti, na film s jakým `id` se uživatel chce dívat kódem `location.hash`. Všimni si, že vlastnost `hash` začíná znakem mřížky (`#`). Id v poli `filmy` mřížkou nezačínají. Mřížku vhodnou metodou na řetězcích odřízni. Není potřeba.
- Cyklem prohledej pole `filmy` a film se stejným id si poznamenej do proměnné.
- Vepiš informace o nalezeném filmu do stránky. Uprav textový obsah a atributy příslušných potomků prvku `#detail-filmu`. Do `.card-text` vepiš dlouhý popis filmu.

Ukol
Pomocí dayjs spočítejte, za kolik dní bude premiéra nebo jak je to od premiéry dávno.
... @TODO: dayjs("18. 12. 2013", "D. M. YYYY")
... do filmy.html přidat dayjs z CDN?
... Možná měsíc 12 napsat jako prosince?
*/

const detailFilmuElement = document.querySelector('#detail-filmu')
if (detailFilmuElement) {
	const idFilmu = location.hash.substring(1)
	let film
	filmy.forEach((porovnavanyFilm) => {
		if (porovnavanyFilm.id === idFilmu) {
			film = porovnavanyFilm
		}
	})
	detailFilmuElement.querySelector('.card-title').textContent = film.nazev
	detailFilmuElement.querySelector('.card-text').textContent = film.popis
	const plakat = detailFilmuElement.querySelector('.img-fluid')
	plakat.src = film.plakat.url
	plakat.width = film.plakat.sirka
	plakat.height = film.plakat.vyska
}
