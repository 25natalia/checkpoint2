export async function getData (){
    try {
        const data = await fetch ('https://cataas.com/cat/says/:text').then ((res)=>res.json())
        return data.results
    } catch (error) {
        console.error (error)
    }
}

export default getData