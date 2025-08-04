export const usuarios = [
  {
    id: 1,
    email: "maria.garcia@email.com",
    password: "password123", // En producción sería hasheado
    nombre: "María",
    apellido: "García",
    telefono: "+57 300 123 4567",
    fechaNacimiento: "1990-05-15",
    fechaRegistro: "2024-01-15",
    estado: "activo",
    tipo: "estudiante",
    // Niveles específicos por baile
    niveles: {
      salsa: "avanzado",
      bachata: "intermedio",
      merengue: "basico",
      "cha-cha-cha": "intermedio",
      "rumba/timba": "basico",
    },
    clasesInscritas: [
      {
        claseId: 1,
        fechaInscripcion: "2024-01-20",
        estado: "activo",
        nivel: "avanzado", // Nivel específico para esta clase
        pagos: [
          {
            id: 1,
            fecha: "2024-01-20",
            monto: 2500,
            estado: "pagado",
            metodo: "efectivo",
          },
        ],
        asistencias: [
          { fecha: "2024-01-22", presente: true },
          { fecha: "2024-01-29", presente: true },
          { fecha: "2024-02-05", presente: false },
        ],
      },
      {
        claseId: 2,
        fechaInscripcion: "2024-02-01",
        estado: "activo",
        nivel: "intermedio", // Nivel específico para esta clase
        pagos: [
          {
            id: 2,
            fecha: "2024-02-01",
            monto: 2500,
            estado: "pagado",
            metodo: "tarjeta",
          },
        ],
        asistencias: [
          { fecha: "2024-02-06", presente: true },
          { fecha: "2024-02-13", presente: true },
        ],
      },
    ],
    historialPagos: [
      {
        id: 1,
        fecha: "2024-01-20",
        monto: 2500,
        concepto: "Salsa - Enero",
        estado: "pagado",
        metodo: "efectivo",
      },
      {
        id: 2,
        fecha: "2024-02-01",
        monto: 2500,
        concepto: "Bachata - Febrero",
        estado: "pagado",
        metodo: "tarjeta",
      },
    ],
  },
  {
    id: 2,
    email: "carlos.rodriguez@email.com",
    password: "password123",
    nombre: "Carlos",
    apellido: "Rodríguez",
    telefono: "+57 300 234 5678",
    fechaNacimiento: "1985-08-22",
    fechaRegistro: "2024-02-01",
    estado: "activo",
    tipo: "estudiante",
    // Niveles específicos por baile
    niveles: {
      salsa: "basico",
      bachata: "basico",
      merengue: "basico",
      "cha-cha-cha": "basico",
      "rumba/timba": "basico",
    },
    clasesInscritas: [
      {
        claseId: 1,
        fechaInscripcion: "2024-02-01",
        estado: "activo",
        nivel: "basico", // Nivel específico para esta clase
        pagos: [
          {
            id: 3,
            fecha: "2024-02-01",
            monto: 2500,
            estado: "pagado",
            metodo: "efectivo",
          },
        ],
        asistencias: [
          { fecha: "2024-02-05", presente: true },
          { fecha: "2024-02-12", presente: true },
        ],
      },
    ],
    historialPagos: [
      {
        id: 3,
        fecha: "2024-02-01",
        monto: 2500,
        concepto: "Salsa - Febrero",
        estado: "pagado",
        metodo: "efectivo",
      },
    ],
  },
  {
    id: 3,
    email: "ana.martinez@email.com",
    password: "password123",
    nombre: "Ana",
    apellido: "Martínez",
    telefono: "+57 300 345 6789",
    fechaNacimiento: "1992-12-10",
    fechaRegistro: "2023-11-15",
    estado: "activo",
    tipo: "estudiante",
    // Niveles específicos por baile
    niveles: {
      salsa: "intermedio",
      bachata: "avanzado",
      merengue: "intermedio",
      "cha-cha-cha": "intermedio",
      "rumba/timba": "avanzado",
    },
    clasesInscritas: [
      {
        claseId: 3,
        fechaInscripcion: "2024-01-10",
        estado: "activo",
        nivel: "avanzado", // Nivel específico para esta clase
        pagos: [
          {
            id: 4,
            fecha: "2024-01-10",
            monto: 300,
            estado: "pagado",
            metodo: "transferencia",
          },
        ],
        asistencias: [
          { fecha: "2024-01-12", presente: true },
          { fecha: "2024-01-19", presente: true },
          { fecha: "2024-01-26", presente: true },
          { fecha: "2024-02-02", presente: true },
        ],
      },
    ],
    historialPagos: [
      {
        id: 4,
        fecha: "2024-01-10",
        monto: 300,
        concepto: "Rumba/Timba - Enero",
        estado: "pagado",
        metodo: "transferencia",
      },
    ],
  },
];

// Usuario administrador
export const admin = {
  id: 999,
  email: "admin@academiabaile.com",
  password: "admin123",
  nombre: "Administrador",
  apellido: "Sistema",
  tipo: "admin",
  estado: "activo",
};
