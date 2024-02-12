import { useFormStatus } from "react-dom";

export default function ButtonSubmit({ title }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button className="btn btn-accent w-[100%]">{pending ? <div className="loader-btn"></div> : title}</button>
    </>
  );
}
