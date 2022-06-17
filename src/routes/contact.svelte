<script context="module">
  import Social from "$lib/components/blocks/Social.svelte";
  import Container from "$lib/components/layout/Container.svelte";

  import LargeTitle from "$lib/components/typography/LargeTitle.svelte";

  export async function load({ params, fetch, session, stuff }) {
    return {
      stuff: {
        title: "Kontakt",
      },
    };
  }
</script>

<script>
  let response;
  let status;
  let submitting = false;
  /**
   * @param {{ currentTarget: HTMLFormElement; }} data
   */
  async function submitForm(data) {
    submitting = true;
    const formData = new FormData(data.currentTarget);
    const res = await fetch("contact.json", {
      method: "POST",
      body: formData,
    });
    response = await res.json();
    status = res.status;
    submitting = false;
  }
</script>

<Container padding class="my-12 text-xl flex flex-col space-y-12">
  <LargeTitle>Wie man mich erreicht</LargeTitle>
  <div>
    <h2 class="font-bold text-3xl">Kontaktformular</h2>
    <p class="text-xs italic text-light-green">Benutzt Google Forms</p>
    {#if status != 200}
      <form
        on:submit|preventDefault={submitForm}
        class="max-w-lg flex flex-col space-y-4"
      >
        <div>
          <label for="name" class="block text-dark">
            Name
            <input
              type="text"
              name="name"
              class="form-input mt-2 block w-full rounded-md border-light-green shadow-sm focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            />
            {#if response?.error == "name"}
              <span class="text-red text-xs"
                >Es wäre cool, wenn du mir sagst wie du heißt!</span
              >
            {/if}
          </label>
        </div>
        <div>
          <label for="email" class="block text-dark">
            E-Mail
            <input
              type="text"
              name="email"
              class="form-input mt-2 block w-full rounded-md border-light-green shadow-sm focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            />
            {#if response?.error == "email"}
              <span class="text-red text-xs"
                >Deine E-Mail Adresse könnte ich brauchen!</span
              >
            {/if}
          </label>
        </div>
        <div>
          <label for="message" class="block text-dark">
            Nachricht
            <textarea
              name="message"
              class="form-textarea mt-2 block w-full rounded-md border-light-green shadow-sm focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            />
            {#if response?.error == "message"}
              <span class="text-red text-xs">Bitte Text eingeben!</span>
            {/if}
          </label>
        </div>
        {#if !submitting}
          <div>
            <input
              type="submit"
              class="px-5 relative items-center justify-center font-semibold text-xl inline-flex bg-black hover:bg-dark-green text-white py-2"
            />
          </div>
        {/if}
      </form>
    {:else}
      <h2 class="font-bold  text-2xl">Die Nachricht wurde übermittelt!</h2>
    {/if}
  </div>

  <div>
    <h2 class="font-bold  text-2xl">Social Media:</h2>
    <div class="text-base">
      <Social />
    </div>
  </div>
  <div>
    <h2 class="font-bold  text-2xl">Per E-Mail:</h2>
    Beruflich: j.krumsieck@tu-braunschweig.de<br />
    Privat: mail@jenskrumsieck.de
  </div>
  <div>
    <h2 class="font-bold  text-2xl">Berufliche Adresse:</h2>
    <p>
      Jens Krumsieck<br />
      Institut für Anorganische und Analytische Chemie<br />
      TU Braunschweig<br />
      Hagenring 30 <br />
      D-38106 Braunschweig
    </p>
  </div>
</Container>
