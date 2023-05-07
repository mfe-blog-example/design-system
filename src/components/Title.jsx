export default function Title({ children, secondary, tertiary }) {
  if (tertiary) return <h3>{ children }</h3>
  if (secondary) return <h2>{ children }</h2>
  return <h1>{ children }</h1>
}