# DIA Dashboard - Sistema de Análisis Educativo Regional# DIA Dashboard - Sistema de Análisis Educativo Regional



## 📋 Descripción## 📋 Descripción



DIA Dashboard es una aplicación web para análisis educativo regional basada en el cuestionario DIA (Diagnóstico Integral de Aprendizajes). Permite visualizar, comparar y analizar indicadores educativos de la región de Aysén con dashboards interactivos.DIA Dashboard es una aplicación de escritorio para análisis educativo regional basada en el cuestionario DIA (Diagnóstico Integral de Aprendizajes). Permite visualizar, comparar y proyectar indicadores educativos a nivel de colegio, comuna y región con dashboards interactivos y análisis predictivo.



## 🎨 Características Principales## 🎨 Características Principales



- **5 Dimensiones DIA**: PA, FVA, AA, ANS, CD con análisis específico### 📊 Dashboards Interactivos

- **Paleta neon-city**: Gradientes personalizados para visualización- **7 Dimensiones DIA** con gráficos específicos por dimensión

- **Gráficos interactivos**: Chart.js con múltiples tipos de visualización- **Paleta neon-city** con gradientes exactos (#0B1D2A→#0E2740, #FF8A00→#FFC107, #FF2D9D→#FF6BD6)

- **API REST**: Backend FastAPI con endpoints para cada dimensión- **Gráficos personalizados**: Stacked Bar Charts, Line Charts, Donut Charts

- **Datos de Aysén**: Información educativa regional específica- **KPIs dinámicos** con indicadores de tendencia



## 🏗️ Estructura del Proyecto### 🔍 Análisis Comparativo

- Comparación **colegio ↔ comuna ↔ región ↔ nacional**

```- Rankings por dimensión y nivel geográfico

proyecto03/- Análisis de brechas de rendimiento

├── apps/

│   ├── backend/          # FastAPI Backend### 🤖 Inteligencia Artificial

│   │   ├── main.py      # Servidor API principal- **Proyecciones temporales** usando Prophet

│   │   └── requirements.txt- **Alertas predictivas** para declives de rendimiento

│   └── frontend/         # Frontend HTML/JS- **Consultas en lenguaje natural** (NLQ)

│       ├── dashboard.html  # Dashboard principal- **Generación de insights** automáticos

│       └── index.html     # Página de inicio

├── demo.html            # Página de demostración### 💻 Aplicación de Escritorio

├── serve_demo.py        # Servidor de desarrollo- **Electron** para distribución multiplataforma

├── package.json         # Configuración del proyecto- **Instalador Windows** con NSIS

└── README.md           # Este archivo- **Base de datos local** PostgreSQL

```- **API REST** con FastAPI



## 🚀 Instalación y Uso## 🏗️ Arquitectura Técnica



### Requisitos Previos```

- **Python 3.8+**proyecto03/

├── apps/

### Instalación│   ├── frontend/          # React + Vite + TypeScript

│   ├── backend/           # FastAPI + SQLAlchemy + PostgreSQL

1. **Instalar dependencias del backend:**│   └── electron/          # Electron main process

```bash├── packages/

cd apps/backend│   └── ui/               # Componentes compartidos

pip install -r requirements.txt├── infra/

```│   ├── database/         # Scripts SQL y migraciones

│   └── docker/           # Configuración Docker

### Ejecución└── dist/                 # Build final y instaladores

```

**Opción 1: Usar script de demostración (recomendado)**

```bash### Stack Tecnológico

python serve_demo.py

```**Frontend:**

Esto iniciará:- React 18 + TypeScript

- Frontend en http://localhost:3000- Vite (build tool)

- Instrucciones para iniciar el backend- TailwindCSS (estilos)

- Recharts (gráficos)

**Opción 2: Ejecución manual**- React Router (navegación)



Terminal 1 - Backend:**Backend:**

```bash- FastAPI (API REST)

cd apps/backend- SQLAlchemy (ORM)

python main.py- PostgreSQL (base de datos)

```- Prophet (proyecciones IA)

- Pandas (análisis de datos)

Terminal 2 - Frontend:

```bash**Desktop:**

cd apps/frontend- Electron 27

python -m http.server 5173- Electron Builder (packaging)

```- NSIS (instalador Windows)



### URLs de la Aplicación## 🚀 Instalación y Configuración

- 🌐 **Frontend**: http://localhost:5173

- 🔌 **API Backend**: http://localhost:8000### Requisitos Previos

- 📚 **API Docs**: http://localhost:8000/docs

- 🎯 **Demo**: http://localhost:3000- **Python 3.8+**

- **Node.js 16+** y npm

## 📊 Dimensiones DIA Implementadas- **PostgreSQL 12+**

- **Git**

1. **PA** - Promoción del aprendizaje

2. **FVA** - Fortalecimiento del vínculo afectivo### Instalación Automática

3. **AA** - Autorregulación académica

4. **ANS** - Ansiedad académica1. **Clonar el repositorio:**

5. **CD** - Ciudadanía digital```bash

git clone <url-repo>

## 🎯 Funcionalidadescd proyecto03

```

### Dashboard Principal

- Vista general con KPIs por dimensión2. **Ejecutar script de instalación:**

- Gráficos comparativos entre establecimientos```bash

- Análisis temporal de tendenciaspython setup.py

- Filtros por comuna y localidad```



### API EndpointsEste script:

- `/api/v1/dimensiones/{dimension}/detalle` - Datos específicos por dimensión- ✅ Verifica requisitos del sistema

- `/api/v1/colegios` - Lista de establecimientos- 📦 Instala todas las dependencias Python y npm

- `/api/v1/geografia/comunas` - Información geográfica- 📁 Crea directorios necesarios

- `/health` - Estado del sistema- ⚙️ Genera archivo `.env` con configuración



### Características Técnicas### Instalación Manual

- **Recuperación de errores**: Sistema robusto con reintentos

- **Datos de respaldo**: Fallback cuando falla la conexión#### Backend (FastAPI)

- **Actualización manual**: Botón para refrescar datos```bash

- **Indicador de estado**: Conexión en tiempo realcd apps/backend

pip install -r requirements.txt

## 🔧 Comandos Útiles```



```bash**Dependencias principales:**

# Instalar dependencias backend- fastapi==0.104.1

npm run install:backend- uvicorn[standard]==0.24.0

- sqlalchemy==2.0.23

# Iniciar backend- psycopg2-binary==2.9.9

npm run dev:backend- pandas==2.1.3

- prophet==1.1.4

# Iniciar frontend

npm run dev:frontend#### Frontend (React)

```bash

# Iniciar aplicación completacd apps/frontend

npm startnpm install

``````



## 📁 Archivos Principales#### Electron

```bash

- `apps/backend/main.py` - Servidor API principal con todos los endpointscd apps/electron

- `apps/frontend/dashboard.html` - Dashboard completo con visualizacionesnpm install

- `apps/frontend/index.html` - Página de inicio```

- `demo.html` - Demostración de funcionalidades

- `serve_demo.py` - Servidor de desarrollo### Configuración de Base de Datos



## 🌟 Próximos Pasos1. **Crear base de datos PostgreSQL:**

```sql

1. ✅ Aplicación funcionandoCREATE DATABASE dia_dashboard;

2. 📊 Cargar datos DIA reales de AysénCREATE USER dia_user WITH PASSWORD 'dia_password';

3. 🎨 Personalizar visualizacionesGRANT ALL PRIVILEGES ON DATABASE dia_dashboard TO dia_user;

4. 📱 Responsive design mejorado```

5. 🚀 Deploy en servidor

2. **Configurar conexión en `.env`:**

---```env

DATABASE_URL=postgresql://dia_user:dia_password@localhost:5432/dia_dashboard

Construido con ❤️ para mejorar la educación en la región de Aysén 🇨🇱```

3. **Ejecutar migraciones:**
```bash
cd apps/backend
alembic upgrade head
```

## 🎯 Uso de la Aplicación

### Desarrollo

**Terminal 1 - Backend:**
```bash
cd apps/backend
uvicorn dia_backend.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd apps/frontend
npm run dev
```

**Terminal 3 - Electron:**
```bash
cd apps/electron
npm run dev
```

### URLs de Desarrollo
- 🌐 **Frontend**: http://localhost:5173
- 🔌 **API Backend**: http://localhost:8000
- 📚 **API Docs**: http://localhost:8000/docs
- 🖥️ **Electron**: Se abre automáticamente

### Producción

**Build completo:**
```bash
npm run build:all
```

**Crear instalador Windows:**
```bash
npm run dist:windows
```

## 📊 Estructura de Datos DIA

### Dimensiones Evaluadas

1. **D1 - Liderazgo** (Preguntas 1-4)
2. **D2 - Gestión Pedagógica** (Preguntas 5-9)
3. **D3 - Formación Personal** (Preguntas 10-18)
4. **D4 - Convivencia Escolar** (Preguntas 19-23)
5. **D5 - Gestión de Recursos** (Preguntas 24-30)
6. **D6 - Participación** (Preguntas 31-35)
7. **D7 - Resultados** (Preguntas 36-38)

### Métricas por Pregunta
- **%RF**: Porcentaje Respuesta Favorable
- **%RNF**: Porcentaje Respuesta No Favorable  
- **%Nulo-NC**: Porcentaje Nulo/No Contesta

### Jerarquía Geográfica
```
País
├── Región (16 regiones)
│   ├── Comuna (~300+ comunas)
│   │   └── Colegio (~12,000+ colegios)
```

## 🎨 Guía de Diseño

### Paleta de Colores Neon-City

**Fondos:**
- `bg-primary`: #0B1D2A → #0E2740 (gradiente principal)
- `bg-secondary`: #1A2332 (secundario)
- `bg-surface`: #243447 (superficies)

**Acentos:**
- `accent-orange`: #FF8A00 → #FFC107 (gradiente naranja)
- `accent-magenta`: #FF2D9D → #FF6BD6 (gradiente magenta)
- `accent-cyan`: #00E5FF (cyan brillante)

### Componentes UI

**KPICard:**
```jsx
<KPICard
  title="Liderazgo"
  value={78.5}
  trend="up"
  change={2.3}
  icon={TrendingUpIcon}
/>
```

**StackedBarChart con gradientes:**
```jsx
<StackedBarChart
  data={chartData}
  gradients={["orange", "magenta"]}
  showLegend={true}
/>
```

## 🔌 API REST

### Endpoints Principales

#### Colegios
- `GET /api/v1/colegios` - Listar colegios
- `GET /api/v1/colegios/search` - Búsqueda typeahead
- `GET /api/v1/colegios/{rbd}` - Detalle colegio

#### Resultados
- `GET /api/v1/resultados` - Resultados con filtros
- `GET /api/v1/resultados/agregados/dimension` - Agregados por dimensión
- `GET /api/v1/resultados/tendencias` - Tendencias históricas

#### Comparativas
- `GET /api/v1/comparativas/colegio` - Comparar colegio vs comuna vs región
- `GET /api/v1/comparativas/ranking` - Rankings por nivel
- `GET /api/v1/comparativas/brechas` - Análisis de brechas

#### Proyecciones IA
- `GET /api/v1/proyecciones/tendencia` - Proyecciones temporales
- `GET /api/v1/proyecciones/alertas` - Alertas predictivas

#### NLQ (Natural Language Query)
- `POST /api/v1/nlq/consulta` - Consultas en lenguaje natural

### Ejemplos de Uso

**Comparar colegio:**
```bash
curl "http://localhost:8000/api/v1/comparativas/colegio?colegio_rbd=12345&periodo_codigo=2024-1&dimension_id=1"
```

**Consulta natural:**
```bash
curl -X POST "http://localhost:8000/api/v1/nlq/consulta" \
  -H "Content-Type: application/json" \
  -d '{"consulta": "¿Cómo se compara el Colegio San José con su comuna en liderazgo?"}'
```

## 🧪 Testing

**Backend:**
```bash
cd apps/backend
pytest tests/
```

**Frontend:**
```bash
cd apps/frontend
npm test
```

**End-to-end:**
```bash
npm run test:e2e
```

## 📈 Análisis de Datos

### Carga de Datos

**Formato CSV esperado (resultados):**
```csv
colegio_rbd,periodo_codigo,dimension_codigo,pregunta_numero,rf_pct,rnf_pct,nulo_nc_pct,total_estudiantes
12345,2024-1,D1_LIDERAZGO,1,75.5,20.2,4.3,150
```

**Endpoint de carga:**
```bash
curl -X POST "http://localhost:8000/api/v1/ingesta/cargar-resultados" \
  -F "archivo=@resultados.csv" \
  -F "validar_sumas=true"
```

### Proyecciones con Prophet

```python
# Ejemplo de uso interno
from dia_backend.services.projections import generate_trend_projection

projection = generate_trend_projection(
    colegio_rbd="12345",
    dimension_id=1,
    periods_ahead=3
)
```

## 🔧 Configuración Avanzada

### Variables de Entorno

```env
# Base de datos
DATABASE_URL=postgresql://user:pass@host:port/db
DB_ECHO=false

# API
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=false

# IA/ML
ENABLE_AI_FEATURES=true
MAX_PROJECTION_PERIODS=6
CONFIDENCE_THRESHOLD=0.7

# Archivos
MAX_UPLOAD_SIZE=52428800
UPLOAD_DIR=uploads

# Logging
LOG_LEVEL=INFO
LOG_FORMAT=json
```

### Docker (Opcional)

```bash
# Backend + PostgreSQL
docker-compose -f infra/docker/docker-compose.yml up -d

# Solo PostgreSQL
docker run -d \
  --name dia-postgres \
  -e POSTGRES_DB=dia_dashboard \
  -e POSTGRES_USER=dia_user \
  -e POSTGRES_PASSWORD=dia_password \
  -p 5432:5432 \
  postgres:14
```

## 🚀 Distribución

### Build de Producción

```bash
# Frontend optimizado
cd apps/frontend
npm run build

# Electron app
cd apps/electron
npm run build

# Instalador Windows
npm run dist:windows
```

### Archivos Generados

```
dist/
├── DIA-Dashboard-Setup-1.0.0.exe    # Instalador Windows
├── dia-dashboard-1.0.0.AppImage     # Linux AppImage
└── DIA-Dashboard-1.0.0.dmg          # macOS DMG
```

## 🐛 Troubleshooting

### Problemas Comunes

**Error de conexión PostgreSQL:**
```bash
# Verificar que PostgreSQL está ejecutándose
pg_isready -h localhost -p 5432

# Verificar credenciales en .env
cat .env | grep DATABASE_URL
```

**Dependencias Python faltantes:**
```bash
cd apps/backend
pip install -r requirements.txt --force-reinstall
```

**Puerto 8000 ocupado:**
```bash
# Cambiar puerto en .env
echo "API_PORT=8001" >> .env
```

**Error en build de Electron:**
```bash
# Limpiar cache y reinstalar
cd apps/electron
rm -rf node_modules package-lock.json
npm install
```

### Logs y Debugging

**Backend logs:**
```bash
tail -f logs/dia-backend.log
```

**Frontend dev tools:**
- F12 → Console en el navegador
- Network tab para APIs

**Electron debugging:**
- Ctrl+Shift+I para DevTools
- Main process logs en terminal

## 🤝 Contribución

### Flujo de Desarrollo

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Estándares de Código

**Python (Backend):**
- PEP 8 + Black formatter
- Type hints obligatorios
- Docstrings en funciones públicas

**TypeScript (Frontend):**
- ESLint + Prettier
- Interfaces explícitas
- Componentes funcionales con hooks

**Commits:**
- Conventional Commits: `feat:`, `fix:`, `docs:`, etc.
- Mensajes en español

## 📄 Licencia

MIT License - Ver archivo `LICENSE` para detalles.

## 📞 Soporte

- **Documentación**: `/docs` en la API
- **Issues**: GitHub Issues
- **Wiki**: Documentación técnica detallada

---

**DIA Dashboard v1.0.0** - Sistema de Análisis Educativo Regional  
Construido con ❤️ para mejorar la educación en Chile 🇨🇱