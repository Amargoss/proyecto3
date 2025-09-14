#!/usr/bin/env python3
"""
Servidor HTTP simple para servir la demo del frontend
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)

    def end_headers(self):
        # Habilitar CORS para permitir llamadas a la API
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🌐 Servidor demo ejecutándose en http://localhost:{PORT}")
            print(f"📱 Abriendo demo.html en el navegador...")
            
            # Intentar abrir en el navegador
            try:
                webbrowser.open(f'http://localhost:{PORT}/demo.html')
            except:
                pass
            
            print(f"🔗 URL: http://localhost:{PORT}/demo.html")
            print(f"⚡ Backend API: http://localhost:8000")
            print(f"📚 API Docs: http://localhost:8000/docs")
            print("\n✋ Presiona Ctrl+C para detener el servidor")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido")
    except OSError as e:
        if e.errno == 10048:  # Puerto ocupado
            print(f"❌ Error: Puerto {PORT} ya está en uso")
            print(f"💡 Intenta con: python -m http.server {PORT + 1}")
        else:
            print(f"❌ Error: {e}")