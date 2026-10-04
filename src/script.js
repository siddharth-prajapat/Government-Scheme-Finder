let submit = document.getElementById("button");
let state = document.getElementById("state");
let age = document.getElementById("age");
let income = document.getElementById("income");
let category = document.getElementById("category");
let api_key = "API-Key";
let result = document.getElementById("result");
result.innerHTML = "";


submit.addEventListener("click", async function () {
    result.innerHTML =`<div class="loader"></div>
    <p>Loading...</p>`;
    let prompt = `user profile: Age = ${age.value}, income = ${income.value}, category = ${category.value}, state = ${state.value}.
in criteria, find the best goverment scheme for the user profile. give the output in json format with scheme name, description, eligiblity criteria, and benefits.
Format:[
{
  "name": "...",
    "benefit": "...",
    "eligibility": "...",
    "link": "..."
    }
]`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": api_key
            },
            body: JSON.stringify({

                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]

            })


        }

    );
    const data = await response.json();
    console.log(data);
    let aitext = data.candidates[0].content.parts[0].text;
    aitext = aitext.replace(/```json/g, "").replace(/```/g, "").trim();
    let startIndex = aitext.indexOf("[");
let endIndex = aitext.lastIndexOf("]");
aitext = aitext.substring(startIndex, endIndex + 1);
    let schemes = JSON.parse(aitext);
    result.innerHTML = "";

    schemes.forEach(async function (scheme) {
        let card = document.createElement("div");
        card.className = "scheme-card";
        card.innerHTML = `
        <h3>${scheme.name}</h3>
        <p>${scheme.benefit}</p>
        <p><strong>Eligibility:</strong> ${scheme.eligibility}</p>
        <a href="${scheme.link}" target="_blank">Apply Now !</a>`;
        result.appendChild(card);
    });

});

