# Clinica Estetica Podologica - Frontend Angular

Proyecto base en **Angular 21** con arquitectura escalable para un sistema integral de centro de estetica y salud podologica.

## Cambios principales

- Mocks centralizados en `src/assets/mocks`.
- Consumo de datos desde servicios (`features/*/services`).
- Variable global para cambiar entre mocks y backend real.
- Modelos centralizados en `src/app/core/models`.
- Rediseno base con Angular Material (layout, cards, headers).
- Estilos globales reutilizables en `src/styles`.

## Switch global mock / real

En `src/app/core/constants/constants.ts`:

- `APP_RUNTIME_FLAGS.useMocks = true`: usa `assets/mocks/*.json`
- `APP_RUNTIME_FLAGS.useMocks = false`: usa endpoints reales `/api/*`

## Arquitectura de datos

- Servicios por dominio:
  - `features/pacientes/services/pacientes.service.ts`
  - `features/historias-clinicas/services/historias-clinicas.service.ts`
  - `features/inventario/services/inventario.service.ts`
  - `features/facturacion-electronica/services/facturacion-electronica.service.ts`
  - `features/insumos/services/insumos.service.ts`
  - `features/promociones/services/promociones.service.ts`
  - `features/citas/services/citas.service.ts`

- Store global NgRx: `src/app/store`
- Store por feature: `src/app/pages/<feature>/store`

## Registro de stores en routing

Algunos stores de feature se registran en routing con `provideState` y `provideEffects`:

- `features/pacientes/pacientes.routes.ts`
- `features/inventario/inventario.routes.ts`
- `features/citas/citas.routes.ts`

## Estilos globales reutilizables

Carpeta `src/styles`:

- `_tokens.scss`
- `_layout.scss`
- `_components.scss`
- `_utilities.scss`

## Scripts

```bash
npm install
npm start
npm run build
npm test
```
