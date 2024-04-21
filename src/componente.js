export function Componente({ title, name = "user" }) {
  // console.log(props)
  return (
    <div>
      <h1>{title}</h1>
      <p>{name}</p>
    </div>
  );
}

export function Usercard({name, monto, address, married, points, greet}){
  console.log(greet)
  return (
    <>
      <h1>{name}</h1>
      <p>{monto}</p>
      <p>{married ? 'Married' : 'Not married'}</p>
      <ul>
        <li>{address.calle}</li>
        <li>{address.cra}</li>
      </ul>
    </>
  );
}