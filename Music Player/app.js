document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const search = document.getElementById("search");
    const categoryButtons = document.querySelectorAll(".category");
    const songListContainer = document.getElementById("song-list");

    const songs = {
        Turkish: ["./songs/Otnicka.Gustavo.Santaolalla.Babel.mp3", "./songs/Alone.mp3", "./songs/Otnicka.Where.Are.You.(Original).mp3"],
        Pakistani: ["./songs/Jo.Tu.Na.Mila.mp3", "./songs/Kahani.Suno.2.0.mp3", "./songs/Pasori.mp3", "./songs/Rockstar.mp3"],
        Indian: ["./songs/AayiNai.mp3", "./songs/AkhiyaanGulaab.mp3", "./songs/Jaana.Samjho.Na.mp3", "./songs/TeriBaatonMeinAisaUljhaJiyaTitleTrack.mp3"]
    };

    function displaySongs(songArray) {
        songListContainer.innerHTML = "";
        songArray.forEach(song => {
            const songItem = document.createElement("div");
            songItem.classList.add("song-item");

            const songName = song.split('/').pop().replace(".mp3", "");

            songItem.textContent = songName;
            songItem.addEventListener("click", () => {
                audio.src = song;
                audio.play();
            });
            songListContainer.appendChild(songItem);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            if (songs[category] && songs[category].length > 0) {
                displaySongs(songs[category]);
            }
        });
    });

    search.addEventListener("input", () => {
        const query = search.value.toLowerCase();
        const allSongs = Object.values(songs).flat();
        const filteredSongs = allSongs.filter(song => song.toLowerCase().includes(query));
        displaySongs(filteredSongs);
    });
});