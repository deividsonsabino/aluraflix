const NETFLIX = [
    { id: 0, name: "Round 6", genre: "Drama", img: "https://occ-0-1274-1123.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSA7nbGSMbXGBcftLYzsYZRRyUvVVFMuWzB077Lyuf2McjyB9Djx0Z6FnAN0erv50W1i4lBbRvZ4DJlodDIbYWHMKhkjm10MOsPDENtQ9T3B17DrEPBNrn8lOGo9.jpg?r=373" },
    { id: 1, name: "Sherek", genre: "Comédia", img: "https://occ-0-1274-1123.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV_4Quo4Sw8p8Hiqc27GNJtwQU3WF1fCCWWPgivQon-Fhfa0LDHTXStTbJDoNM94MfMhplqAU-l7Y5AIgk4WbDl02ek.webp?r=e24" },
    { id: 2, name: "All Of Us Are Dead", genre: "Terror", img: "https://occ-0-1274-1123.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYlb2a4agu2arNjrmWAxT8tRA6xGmk0eRRR98-X4ajnSBIL5kSfbUfVuBp3c0TQjmpHwYjQf3RZyRuxZeAE2fMsbaJ4jw0u1r81BDFVRlz_8nca8smCg8tzKrl4S.jpg?r=7ec" },
    { id: 2, name: "Black Summer", genre: "Terror", img: "https://occ-0-1274-1123.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRDHjSqiajwGVof6nQj1PCcMCvWAoHSTYnga9GOaCMZ9Vesd5K-6H5ldR7EGIeYgLYUy7AMkqXf7JCyyi1tE3R67kUpAFXXUep1W31U8Eqwo3bZCiVWZzvPK8Gm3.jpg?r=a0e" },
]

const AMAZONPRIME = [
    { id: 0, name: "Mr. Robot", genre: "Drama", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0b21a40e04fb4f08268e70c9c0600e72739c37756002967fb2f1948252d2790a._UR1920,1080_RI_SX356_FMwebp_.jpg" },
    { id: 1, name: "John Wick", genre: "Ação", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/338941c5fb4291923caa3fa4b7eecfe24a3fc17b519d42cc8bb68aaa3fd96951._UR1920,1080_RI_UX400_UY225_.jpg" },
    { id: 2, name: "Todo Mundo Odeia O Chris", genre: "Comédia", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b0615431546fb6f029325fe9020cdd7e45dedc4ae30a8c1ea36d7bd5ac16324d._UR1920,1080_RI_UX400_UY225_.jpg" },
    { id: 2, name: "Sinister", genre: "Terror", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0d584af143ae1997b954c102c1a4c2ac7b227911d8775bf0b4b8201350476587._UR1920,1080_RI_SX356_FMwebp_.jpg" },
]

function didMount() {
    handleMoviesList("netflix", NETFLIX);
    handleMoviesList("amazon-prime", AMAZONPRIME);
}

function handleMoviesList(id, movieList) {
    document.getElementById(id).innerHTML =
        movieList.map(movie => (
            `<div class="card">
            <img 
                class="card-image rounded-lg"
                src="${movie.img}" />
                <div>
                    <p class="my-1 text-md font-bold">${movie.name}</p>
                    <p class="m-0 text-xs">Gênero: ${movie.genre}</p>
                </div>
        </div>
     `))
}