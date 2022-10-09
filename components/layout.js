import Nav from "./Nav";
// We want these components enclosed/wrapped by Layout to appear on all `pages`.
// Navigation can occur on all `pages` and these components will remain visible.
// We pass in `children` being all the other components being enclosed/wrapped.
// Below `children` represent all the other pages within our `<main>`.
// The `Nav` will always be visible but `children` pages will basically switch.
export default function Layout({ children }) {
  return (
    <div className="mx-14">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
