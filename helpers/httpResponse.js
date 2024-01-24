export default class HttpResponse {
  /**
   * Retorna uma resposta de sucesso (status 200).
   * @param {Object} obj - Objeto a ser retornado no corpo da resposta.
   * @returns {Object} - Resposta HTTP.
   */
  static success(obj) {
    return {
      statusCode: 200,
      body: obj,
    };
  }

  /**
   * Retorna uma resposta de criação bem-sucedida (status 201).
   * @param {Object} obj - Objeto a ser retornado no corpo da resposta.
   * @returns {Object} - Resposta HTTP.
   */
  static created(obj) {
    return {
      statusCode: 201,
      body: obj,
    };
  }

  /**
   * Retorna uma resposta indicando que o item não foi encontrado (status 404).
   * @returns {Object} - Resposta HTTP.
   */
  static notFound() {
    return {
      statusCode: 404,
      body: {
        error: "Item not found",
      },
    };
  }

  /**
   * Retorna uma resposta de exclusão bem-sucedida (status 204).
   * @returns {Object} - Resposta HTTP.
   */
  static deleted() {
    return {
      statusCode: 204,
    };
  }

  /**
   * Retorna uma resposta indicando que um parâmetro obrigatório está ausente (status 400).
   * @param {string} param - Nome do parâmetro ausente.
   * @returns {Object} - Resposta HTTP.
   */
  static missingParam(param) {
    return {
      statusCode: 400,
      body: {
        error: `Missing required field: '${param}'`,
      },
    };
  }

  /**
   * Retorna uma resposta indicando um conflito, como a tentativa de criar um item que já existe (status 409).
   * @param {string} param - Nome do item que já existe.
   * @returns {Object} - Resposta HTTP.
   */
  static alreadyExist(param) {
    return {
      statusCode: 409,
      body: {
        error: `${param} already exists`,
      },
    };
  }
}
