import { json } from '@sveltejs/kit';

const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export async function POST({ request }) {
    const body = await request.formData()
    const name = body.get("name")
    const email = body.get("email")
    const message = body.get("message")
    if (name == "") return json({ error: "name" }, {
        status: 500
    })
    if (!email || email == "" || !emailReg.test(email.toString())) return json({ error: "email" }, {
        status: 500
    })
    if (message == "") return json({ error: "message" }, {
        status: 500
    })
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSf-I6ML8NIMYEQSGN4tgwXRpZcZF7XDx3A0U3IVrijWs8zNhg/formResponse?usp=pp_url&entry.1410434590=${name}&entry.943353125=${email}&entry.1825326586=${message}&submit=Submit`;

    const res = await fetch(url)
    if (res.status == 200)
        return json({ message: "Nachricht versendet" })
    else
        return new Response(undefined, { status: 500 })
}