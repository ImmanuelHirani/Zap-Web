let availableKeywords = [
  "Bagaimana jika baru pertama kali ke ZAP?",
  "Apakah usia dibawah 17 tahun dan belum memiliki KTP bisa menjadi klien ZAP ?",
  "Siapa saja yang dapat melakukan booking treatment ?",
  "Bagaimana cara melakukan reservasi perawatan di ZAP ?",
  "Bagaimana jika klien tidak datang dari jadwal perawatan tanpa konfirmasi?",
];

const searchBox = document.querySelector(".search-boxFaq");
const inputBox = document.querySelector("#inputBoxFaq");
const resultList = document.querySelector("#resultListFaq"); // Select the ul element

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });

    resultList.innerHTML = ""; // Clear the previous results

    if (result.length > 0) {
      searchBox.classList.remove("hidden");

      result.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("py-3", "px-3", "lg:text-base", "md:text-sm", "text-xs", "cursor-pointer", "hover:bg-gray-200"); // Tambahkan kelas "hover:bg-gray-200" untuk efek hover

        listItem.textContent = item;
        listItem.onclick = function () {
          inputBox.value = item;
          searchBox.classList.add("hidden");
        };
        resultList.appendChild(listItem);
      });
    } else {
      searchBox.classList.remove("hidden"); // Show the search box
      resultList.innerHTML = "<li class='py-3 lg:text-base md:text-sm text-xs px-3'>Maaf, pertanyaan tidak ditemukan.</li>"; // Add the message directly
    }
  } else {
    searchBox.classList.add("hidden");
  }
};
