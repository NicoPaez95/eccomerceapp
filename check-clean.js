#!/usr/bin/env node
const { execSync } = require("child_process");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");

function runCmd(title, cmd, saveOutput = null) {
  console.log(chalk.bgBlue.white.bold(`\n📌 ${title} \n`));
  try {
    const output = execSync(cmd, { encoding: "utf-8" });
    console.log(output);

    if (saveOutput) {
      fs.outputFileSync(saveOutput, output);
    }
    return output;
  } catch (err) {
    console.error(chalk.red(`❌ Error o advertencias en: ${title}`));
    if (saveOutput) {
      fs.outputFileSync(saveOutput, err.stdout || err.stderr || String(err));
    }
    return err.stdout || err.stderr || String(err);
  }
}

function createHTMLReport(knipOutput, unimportedOutput) {
  const html = `
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Reporte de Código Muerto</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #2b6cb0; }
        pre { background: #f8f9fa; padding: 10px; border-radius: 5px; overflow-x: auto; }
      </style>
    </head>
    <body>
      <h1>📊 Reporte de Código Muerto</h1>
      <h2>Knip (exports y archivos no usados)</h2>
      <pre>${knipOutput}</pre>
      <h2>Unimported (archivos sin referencia)</h2>
      <pre>${unimportedOutput}</pre>
    </body>
    </html>
  `;
  const reportPath = path.join(__dirname, "dead-code-report.html");
  fs.writeFileSync(reportPath, html);
  console.log(chalk.green(`\n📄 Reporte HTML generado en: ${reportPath}`));
}

// 1. Auto-fix ESLint para limpiar imports y variables no usados
runCmd("1️⃣ ESLint (auto-fix de variables/imports no usados)", "npx eslint . --ext .js,.jsx,.ts,.tsx --fix");

// 2. Knip para detectar archivos y exports muertos (y guardar salida)
const knipOutput = runCmd("2️⃣ Knip (detección de exports y archivos no usados)", "npx knip", "knip-output.txt");

// 3. Depcheck para dependencias no usadas
runCmd("3️⃣ Depcheck (dependencias no utilizadas)", "npx depcheck", "depcheck-output.txt");

// 4. Unimported para archivos huérfanos
const unimportedOutput = runCmd("4️⃣ Unimported (archivos huérfanos)", "npx unimported", "unimported-output.txt");

// 5. Generar reporte HTML
createHTMLReport(knipOutput, unimportedOutput);

console.log(chalk.bgGreen.black("\n✅ Análisis y limpieza completados."));
