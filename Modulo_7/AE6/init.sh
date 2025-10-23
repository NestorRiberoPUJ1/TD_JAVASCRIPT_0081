#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$SCRIPT_DIR/models"
mkdir -p "$SCRIPT_DIR/controllers"
mkdir -p "$SCRIPT_DIR/routes"
mkdir -p "$SCRIPT_DIR/config"

touch "$SCRIPT_DIR/.env"

