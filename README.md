# Clinica Estetica Podologica - Frontend Angular

Proyecto base en **Angular 21 (ultima version estable)** con una arquitectura escalable para un sistema integral de centro de estetica y salud podologica.

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
src/app
|-- core
|   |-- constants
|   |-- guards
|   |-- interceptors
|   |-- interfaces
|   |-- layout
|   |-- models
|   `-- services
|-- shared
|   `-- ui
`-- features
    |-- dashboard
    |-- pacientes
    |-- historias-clinicas
    |-- inventario
    |-- facturacion-electronica
    |-- insumos
    |-- promociones
    |-- citas
    `-- reportes
```

### Principios aplicados

1. **Feature-first**: cada dominio vive en su propio contexto (`features/...`).
2. **Core centralizado**: autenticacion, layout, guardas e interceptores compartidos.
3. **Shared reutilizable**: componentes de interfaz comunes (`page-header`, `kpi-card`).
4. **Lazy loading por dominio**: rutas bajo demanda para escalar rendimiento.
5. **Preparado para integracion backend**: capas `models` + `data-access` listas para APIs REST/GraphQL.

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
- Agregar estado global (NgRx Signals Store o equivalente) cuando el flujo transaccional crezca.
- Anadir pruebas E2E (Playwright/Cypress) para procesos criticos: agenda, historia, factura y caja.
