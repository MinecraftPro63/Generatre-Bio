{ pkgs }: {
  deps = [
    pkgs.recho "# Generatre-Bio" >> README.md
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}