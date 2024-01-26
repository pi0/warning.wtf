const wtfWarnSetup = Symbol.for("warntf-setup");

export function setupConsole() {
  if (globalThis.process?.env?.NO_WTF_WARN || (globalThis as any).NO_WTF_WARN) {
    return;
  }

  // @ts-ignore
  if (globalThis[wtfWarnSetup]) {
    return;
  }
  // @ts-ignore
  globalThis[wtfWarnSetup] = true;

  const _warn = console.warn;
  let ctr = 0;

  const freq =
    Number.parseInt(
      globalThis?.process?.env?.WTF_WARN_FREQ ||
        (globalThis as any).WTF_WARN_FREQ ||
        "",
    ) || 5;

  console.warn = (...args: any[]) => {
    _warn(...args);
    if (++ctr % freq === 0) {
      const msg = `👀 You have seen and ignored \`${ctr}\` console warnings so far. Why? https://warning.wtf`;
      const ml =
        (msg.length + 2) /* no ideas why 2 honestly but it works */ / 2;
      console.info(
        `\n\n${"👇".repeat(ml)}\n\n${msg}\n\n${"👆".repeat(ml)}\n\n`,
      );
    }
  };
}
