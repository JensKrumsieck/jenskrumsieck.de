const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export async function post({ request }) {
    const body = await request.formData()
    const name = body.get("name")
    const email = body.get("email")
    const message = body.get("message")
    if (name == "") return {
        status: 500, body: { error: "name" }
    }
    if (email == "" || !emailReg.test(email)) return {
        status: 500, body: { error: "email" }
    }
    if (message == "") return {
        status: 500, body: { error: "message" }
    }
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSf-I6ML8NIMYEQSGN4tgwXRpZcZF7XDx3A0U3IVrijWs8zNhg/formResponse?usp=pp_url&entry.1410434590=${name}&entry.943353125=${email}&entry.1825326586=${message}&submit=Submit`;

    const res = await fetch(url)
    if (res.status == 200)
        return {
            status: 200,
            body: { message: "Nachricht versendet" }
        }
    else
        return { status: 500 }
}