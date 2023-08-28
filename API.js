export async function fetchData ( type,setAllData) {
    const req = await fetch(`https://api.sampleapis.com/coffee/${type}`)
    const data = await req.json()
    setAllData(data);
  }

