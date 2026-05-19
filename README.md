# Clinica Estetica Podologica - Frontend Angular

Proyecto base en **Angular 21 (ultima version estable)** con arquitectura escalable para un sistema integral de centro de estetica y salud podologica.

## Alcance funcional inicial

Esta base cubre la estructura para evolucionar los siguientes dominios:

- Historias clinicas
- Gestion de pacientes
- Agenda de citas
- Inventario
- Manejo de insumos
- Facturacion electronica
- Promociones y campanas
- Reportes operativos y financieros

## Arquitectura propuesta

```text
src
|-- app
|   |-- core
|   |   |-- constants
|   |   |   `-- constants.ts
|   |   |-- guards
|   |   |-- interceptors
|   |   |-- interfaces
|   |   |-- layout
|   |   |-- models
|   |   `-- services
|   |-- store
|   |   |-- actions
|   |   |-- effects
|   |   |-- reducer
|   |   |-- selectors
|   |   |-- state
|   |   `-- meta-reducers
|   |-- pages
|   |   |-- pacientes
|   |   |   `-- store
|   |   |       |-- actions
|   |   |       |-- effects
|   |   |       |-- reducer
|   |   |       |-- selectors
|   |   |       |-- state
|   |   |       `-- facade
|   |   |-- inventario
|   |   |   `-- store
|   |   |       |-- actions
|   |   |       |-- effects
|   |   |       |-- reducer
|   |   |       |-- selectors
|   |   |       |-- state
|   |   |       `-- facade
|   |   `-- citas
|   |       `-- store
|   |           |-- actions
|   |           |-- effects
|   |           |-- reducer
|   |           |-- selectors
|   |           |-- state
|   |           `-- facade
|   |-- shared
|   |   `-- ui
|   `-- features
|       |-- dashboard
|       |-- pacientes
|       |-- historias-clinicas
|       |-- inventario
|       |-- facturacion-electronica
|       |-- insumos
|       |-- promociones
|       |-- citas
|       `-- reportes
`-- assets
    `-- i18n
        |-- es.json
        `-- en.json
```

## Store NgRx

El Store maneja estado global y por feature usando NgRx.

- Store global: `src/app/store`
- Store por feature: `src/app/pages/<feature>/store`

Conceptos clave implementados:

- State
- Actions
- Reducers
- Selectors
- Effects
- Facade para desacoplar componentes de NgRx

## Registro de stores en routing

Algunos stores de feature se registran en routing con `provideState` y `provideEffects`.

Ejemplos actuales:

- `features/pacientes/pacientes.routes.ts`
- `features/inventario/inventario.routes.ts`
- `features/citas/citas.routes.ts`

## Consumo de endpoints con NgRx

En el feature de pacientes se implemento un flujo completo:

1. `PacientesActions.loadPacientes`
2. `PacientesEffects` consume endpoint (`/api/pacientes`) via `PacientesRepository`
3. `PacientesReducer` actualiza estado (`items`, `loading`, `error`, `loadedAt`)
4. `PacientesFacade` expone observables al componente
5. `PacientesHomePage` consume facade sin acoplarse a NgRx

## Interceptores HTTP

- `auth-token.interceptor.ts`: agrega header Authorization
- `http-error.interceptor.ts`: maneja errores y estado global de requests

## Constantes globales

En `core/constants/constants.ts` se centraliza:

- Llaves de storage
- Estados/IDs comunes
- Limites de negocio
- Patrones de validacion
- Mensajes generales
- Endpoints base

## Scripts

```bash
npm install
npm start
npm run build
npm test
```

## Recomendaciones de evolucion

- Integrar autenticacion real con JWT/OAuth2 y control de permisos por rol.
- Conectar facturacion electronica con proveedor autorizado (cumplimiento tributario local).
- Incorporar trazabilidad clinica (auditoria, versionado de historia, firma digital).
- Integrar libreria de i18n (por ejemplo Transloco o ngx-translate) consumiendo `assets/i18n`.
- Anadir pruebas E2E (Playwright/Cypress) para procesos criticos: agenda, historia, factura y caja.
