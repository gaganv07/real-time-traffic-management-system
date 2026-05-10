Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$platformDir = Join-Path $root "services\platform"
$venvDir = Join-Path $platformDir ".venv"
$activateScript = Join-Path $venvDir "Scripts\Activate.ps1"

if (-not (Test-Path $venvDir)) {
    python -m venv $venvDir
}

& $activateScript
pip install -r (Join-Path $platformDir "requirements.txt")
Set-Location $platformDir
uvicorn app.main:app --reload --port 8000
