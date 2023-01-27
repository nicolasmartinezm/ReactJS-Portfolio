import classes from "../../styles/footerStyles/Creator.module.css";
export default function Creator() {
  return (
    <section className={classes.Creator}>
      <p>
        &copy; Website developed by{" "}
        <a
          href="https://github.com/nicolasmartinezm"
          className={classes.footerLink}
          target="_blank"
          rel="noreferrer"
        >
          Nicolas Martinez
        </a>{" "}
        from{" "}
        <a
          href="https://heynick.cl"
          className={classes.footerLink}
          target="_blank"
          rel="noreferrer"
        >
          heynick.cl
        </a>
        . 2022
      </p>
    </section>
  );
}
