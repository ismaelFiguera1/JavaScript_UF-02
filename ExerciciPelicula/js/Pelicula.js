export class Pelicula {
  constructor(id, titol, director, any, pais, generes, qualificacio) {
    this.DadesObjecteObligatories(
      id,
      titol,
      director,
      any,
      pais,
      generes,
      qualificacio
    );
    this.id = this.ValidacioID(id) ? id : undefined;
    this.titol = this.ValidacioTitol(titol) ? titol : undefined;
    this.director = this.ValidarDirector(director) ? director : undefined;
    this.any = this.ValidarAny(any) ? any : undefined;

    let b;
  }

  // Valido de que estiguin TOTES les dades

  DadesObjecteObligatories(
    id,
    titol,
    director,
    any,
    pais,
    generes,
    qualificacio
  ) {
    if (
      id === undefined ||
      titol === undefined ||
      director === undefined ||
      any === undefined ||
      pais === undefined ||
      generes === undefined ||
      qualificacio === undefined
    ) {
      console.error("NO pot haver valors undefined al constructor de Pelicula");
      return false;
    } else {
      return true;
    }
  }

  // Valido que el id sigui correcte

  ValidacioID(id) {
    if (id === undefined) {
      console.error("El id es undefined");
      return false;
    } else if (typeof id !== "string") {
      console.error(
        "El id te que ser un string per almacenar lletres i numeros"
      );
      return false;
    } else if (id.length !== 9) {
      console.error("El id te que tindre 9 caracters");
      return false;
    } else {
      console.log("El id es correcte");
      return true;
    }
  }

  // Ara valido el titol

  ValidacioTitol(titolPeli) {
    if (titolPeli === undefined) {
      console.error("El Titol es undefined");
      return false;
    } else if (typeof titolPeli !== "string") {
      console.error("El titol te que ser un string");
      return false;
    } else if (titolPeli.length > 100) {
      console.error("El titol no pot tindre mes de 100 caracters");
      return false;
    } else {
      console.log("El titol es correcte");
      return true;
    }
  }

  // Validacio director

  ValidarDirector(directorPeli) {
    if (directorPeli === undefined) {
      console.error("El director es undefined");
      return false;
    } else if (typeof directorPeli !== "string") {
      console.error("El director te que ser un string");
      return false;
    } else if (directorPeli.length > 50) {
      console.error("El director no pot tindre mes de 50 caracters");
      return false;
    } else {
      console.log("El director es correcte");
      return true;
    }
  }

  // Validar any

  ValidarAny(any) {
    let anySTRING = any.toString();
    if (any === undefined) {
      console.error("El any es undefined");
      return false;
    } else if (isNaN(any)) {
      console.error("El any te que ser un numero");
      return false;
    } else if (anySTRING.length !== 4) {
      console.error("L'any te que tindrer 4 digits");
      return false;
    } else {
      console.log("L'Any es correcte");
      return true;
    }
  }
}
