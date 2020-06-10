const data = [
  {
    name: "Rob Roe",
    age: 28,
    gender: "male",
    lookingFor: "female",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Ane Glom",
    age: 31,
    gender: "female",
    lookingFor: "male",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Max Doe",
    age: 24,
    gender: "male",
    lookingFor: "male",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Rebeca McKenzie",
    age: 28,
    gender: "female",
    lookingFor: "female",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Joe JOhnnson",
    age: 42,
    gender: "male",
    lookingFor: "female",
    location: "Paris",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
