
export default function PageComponent({buttons='', children}) {
  return (
    <>
    <div>{buttons}</div>
    <div>{children}</div>
    </>
    )
}
