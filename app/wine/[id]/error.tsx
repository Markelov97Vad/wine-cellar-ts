'use client'

function ErrorWrapper({error} : { error : Error}) {
  return (
    <h1>
      Oops!!! {error.message}
    </h1> 
  );
}

export default ErrorWrapper;