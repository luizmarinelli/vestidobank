(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ativar-conta/ativar-conta.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ativar-conta/ativar-conta.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"background\">\r\n    <div class=\"container\">\r\n        <div class=\"content\">\r\n            <h3>Parece que você já tem uma conta no nosso banco.</h3>\r\n\r\n            <form [formGroup]=\"AtivarContaFormGroup\">\r\n                <p>Para ativar sua conta, confirme seus dados pessoais:</p>\r\n                <p><input type=\"text\" name=\"cpf\" formControlName=\"cpf\" placeholder=\"CPF\" maxlength=\"11\"></p>\r\n                <p><input type=\"text\" name=\"rg\" formControlName=\"rg\" placeholder=\"RG\" maxlength=\"9\"></p>\r\n                <p>\r\n                    <input class=\"data\" matInput [matDatepicker]=\"nascimento\" name=\"dtNascimento\" formControlName=\"dtNascimento\" placeholder=\"Data de nascimento\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"nascimento\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #nascimento></mat-datepicker>\r\n                </p>\r\n                <div>\r\n                    <p>Crie sua nova senha para acessar o InternetBanking:</p>\r\n                    <p><input type=\"password\" name=\"senhaAcesso\" formControlName=\"senhaAcesso\" minlength=\"8\" maxlength=\"15\" placeholder=\"Nova senha de acesso\"></p>\r\n\r\n                    <p>Crie sua nova senha para efetuar transações:</p>\r\n                    <p><input type=\"password\" name=\"senhaTransacoes\" formControlName=\"senhaTransacoes\" minlength=\"4\" maxlength=\"4\" placeholder=\"Nova senha de transações\"></p>\r\n\r\n                    <div class=\"botao\">\r\n                        <button mat-raised-button (click)=\"onAtivar()\">Ativar Conta</button>\r\n                    </div>\r\n                    <br>\r\n                    <small class=\"erro\" *ngIf=\"erro == true\">Algo deu Errado!</small>\r\n                    <small class=\"sucesso\" *ngIf=\"sucesso == true\">Sucesso!</small>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<div class=\"background\"></div>\r\n<div class=\"banner\">\r\n    <h3>Não se preocupe. Viva!</h3>\r\n</div>\r\n\r\n<div class=\"cadastro-container\">\r\n    <div class=\"cadastro\">\r\n        <mat-vertical-stepper class=\"stepper\" [linear]=\"false\">\r\n            <mat-step label=\"Dados pessoais\">\r\n                <form [formGroup]=\"dadosPessoaisFormGroup\">\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" name=\"cpf\" placeholder=\"CPF\" formControlName=\"cpf\" minlength=\"11\" maxlength=\"11\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput [matDatepicker]=\"nascimento\" name=\"data-nascimento\" placeholder=\"Data de nascimento\" formControlName=\"dtNascimento\" minlength=\"8\" maxlength=\"8\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"nascimento\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #nascimento></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <br>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput name=\"rg\" placeholder=\"RG\" formControlName=\"rg\" minlength=\"9\" maxlength=\"9\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"orgao-emissor\" placeholder=\"Órgão emissor\" formControlName=\"orgaoEmissor\" minlength=\"5\" maxlength=\"5\">\r\n                    </mat-form-field>\r\n\r\n                    <br>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"nome\" placeholder=\"Nome\" formControlName=\"nome\" maxlength=\"40\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"sobrenome\" placeholder=\"Sobrenome\" formControlName=\"sobrenome\" maxlength=\"50\">\r\n                    </mat-form-field>\r\n\r\n                    <br>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"nacionalidade\" placeholder=\"Nacionalidade\" formControlName=\"nacionalidade\" maxlength=\"20\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"naturalidade\" placeholder=\"Naturalidade\" formControlName=\"naturalidade\" maxlength=\"20\">\r\n                    </mat-form-field>\r\n                    <div>\r\n                        <button mat-button matStepperNext>Próximo</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n\r\n            <mat-step label=\"Informações familiares\">\r\n                <form [formGroup]=\"FamiliaresFormGroup\">\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"nome-mae\" placeholder=\"Nome da mãe\" formControlName=\"nomeMae\" maxlength=\"40\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"sobrenome-mae\" placeholder=\"Sobrenome da mãe\" formControlName=\"sobrenomeMae\" maxlength=\"50\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"nome-pai\" placeholder=\"Nome do pai\" formControlName=\"nomePai\" maxlength=\"40\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"sobrenome-pai\" placeholder=\"Sobrenome do pai\" formControlName=\"sobrenomePai\" maxlength=\"50\">\r\n                    </mat-form-field>\r\n                </form>\r\n\r\n                <div>\r\n                    <button mat-button matStepperPrevious>Voltar</button>\r\n                    <button mat-button matStepperNext>Próximo</button>\r\n                </div>\r\n            </mat-step>\r\n\r\n\r\n            <mat-step label=\"Contato\">\r\n                <form [formGroup]=\"contatoFormGroup\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput type=\"email\" name=\"email\" placeholder=\"E-mail\" formControlName=\"email\" maxlength=\"30\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" name=\"tel-residencial\" placeholder=\"Telefone residencial\" formControlName=\"telResid\" minlength=\"8\" maxlength=\"10\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" name=\"tel-celular\" placeholder=\"Telefone celular\" formControlName=\"telCel\" minlength=\"9\" maxlength=\"11\">\r\n                    </mat-form-field>\r\n                </form>\r\n\r\n                <div>\r\n                    <button mat-button matStepperPrevious>Voltar</button>\r\n                    <button mat-button matStepperNext>Próximo</button>\r\n                </div>\r\n            </mat-step>\r\n\r\n            <mat-step label=\"Endereço\">\r\n                <form [formGroup]=\"enderecoFormGroup\">\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" type=\"text\" name=\"cep\" placeholder=\"CEP\" formControlName=\"cep\" minlength=\"8\" maxlength=\"8\" (blur)=\"onBuscaCEP()\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"cidade\" placeholder=\"Cidade\" formControlName=\"cidade\" maxlength=\"30\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput name=\"logradouro\" placeholder=\"Logradouro\" formControlName=\"logradouro\" maxlength=\"50\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" name=\"numero\" placeholder=\"Número\" formControlName=\"numero\" maxlength=\"5\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput name=\"complemento\" placeholder=\"Complemento\" formControlName=\"complemento\" maxlength=\"30\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput name=\"bairro\" placeholder=\"Bairro\" formControlName=\"bairro\" maxlength=\"20\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"letterOnly($event)\" name=\"estado\" placeholder=\"Sigla do estado\" formControlName=\"siglaEstado\" minlength=\"2\" maxlength=\"2\">\r\n                    </mat-form-field>\r\n                </form>\r\n                <div>\r\n                    <button mat-button matStepperPrevious>Voltar</button>\r\n                    <button mat-button matStepperNext>Próximo</button>\r\n                </div>\r\n            </mat-step>\r\n\r\n            <mat-step label=\"Confirmação\">\r\n                <form [formGroup]=\"clienteLoginFormGroup\">\r\n\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput type=\"password\" name=\"senhaAcesso\" placeholder=\"Senha do InternetBanking\" formControlName=\"senhaAcesso\" minlength=\"8\" maxlength=\"15\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-475 ml-4\">\r\n                        <input matInput type=\"password\" name=\"confirmacaoSenha\" placeholder=\"Confirme a senha do InternetBanking\" formControlName=\"confirmacaoSenha\" minlength=\"8\" maxlength=\"15\" [errorStateMatcher]=\"matcher\">\r\n                    </mat-form-field>\r\n\r\n                    <div>\r\n                        <button mat-button matStepperPrevious>Voltar</button>\r\n                        <button mat-button matStepperNext>Próximo</button>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n            </mat-step>\r\n\r\n            <mat-step label=\"Senha\">\r\n                <form [formGroup]=\"senhaFormGroup\">\r\n                    <mat-form-field class=\"w-475 mr-3\">\r\n                        <input matInput (keypress)=\"numberOnly($event)\" minlength=\"4\" maxlength=\"4\" type=\"password\" name=\"senhaTransacoes\" placeholder=\"Senha para Transações\" formControlName=\"senhaTransacoes\">\r\n                    </mat-form-field>\r\n\r\n\r\n                    <p>Clicando no botão 'Finalizar', você confirma que deseja se cadastrar no InternetBanking.\r\n                        <div>\r\n                            <button mat-button matStepperPrevious>Voltar</button>\r\n                            <button mat-button matStepperNext (click)=\"onCadastro()\" [disabled]=\"dadosPessoaisFormGroup.invalid && contatoFormGroup.invalid && enderecoFormGroup.invalid && FamiliaresFormGroup.invalid\">Próximo</button>\r\n\r\n                            <small *ngIf=\"dadosPessoaisFormGroup.invalid && contatoFormGroup.invalid && enderecoFormGroup.invalid && FamiliaresFormGroup.invalid\">Algum formulário possui informações incorretas!</small>\r\n                        </div>\r\n                </form>\r\n            </mat-step>\r\n            <mat-step label=\"Foto\">\r\n                <form [formGroup]=\"fotoFormGroup\">\r\n                    <label class=\"image-upload-container btn btn-bwm\">\r\n                        <span>Selecione uma imagem da parte frontal e traseira do seu documento digitalizado.</span>\r\n                        <input type=\"file\" name=\"image\" (change)=\"fileProgress($event)\"  formControlName=\"foto\" />\r\n                    </label>\r\n                    <div>\r\n                        <button mat-button matStepperPrevious>Voltar</button>\r\n                        <button mat-button matStepperNext (click)=\"onUpload()\">Finalizar</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n        </mat-vertical-stepper>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/erros/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/erros/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\r\n    <h2>Essa página não está disponível!</h2>\r\n    <p>\r\n        O link que você está tentando acessar não está\r\n        disponível ou não foi encontrado.\r\n    </p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-info/alterar-info.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-info/alterar-info.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Alterar informações de cadastro</h1>\r\n<mat-divider></mat-divider>\r\n\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarPerfil == false\" (click)=\"onEditarPerfil()\">Editar informações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarPerfil == true\" (click)=\"salvarAlteracoesPerfil()\">Salvar alterações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarPerfil == true\" (click)=\"onEditarPerfil()\">Cancelar</button>\r\n<h3>Perfil</h3>\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"conteudo\">\r\n    <div class=\"esquerda\">\r\n        <p><b>Nome:</b> {{this.nome}}</p>\r\n        <p><b>Sobrenome:</b> {{this.sobrenome}}</p>\r\n        <p><b>CPF:</b> {{this.cpf}}</p>\r\n        <p><b>RG:</b> {{this.rg}}</p>\r\n        <p><b>Órgão emissor:</b> {{this.orgaoEmissor}}</p>\r\n        <p><b>Data de nascimento:</b> {{this.dtNascimento | date: 'dd/MM/yyyy'}}</p>\r\n        <p><b>Nacionalidade:</b> {{this.nacionalidade}}</p>\r\n        <p><b>Naturalidade:</b> {{this.naturalidade}}</p>\r\n        <br>\r\n        <small class=\"sucesso\" *ngIf=\"sucessoPerfil==true\">Informações alteradas com sucesso</small>\r\n        <small class=\"erro\" *ngIf=\"erroPerfil==true\">Ocorreu um erro ao alterar suas informações</small>\r\n    </div>\r\n\r\n    <div class=\"direita\">\r\n        <form [formGroup]=\"alterarPerfilFormGroup\" *ngIf=\"editarPerfil == true\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"nome\" formControlName=\"nome\" value=\"{{this.nome}}\" placeholder=\"Nome\" maxlength=\"40\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"sobrenome\" formControlName=\"sobrenome\" value=\"{{this.sobrenome}}\" placeholder=\"Sobrenome\" maxlength=\"50\">\r\n            <input (keypress)=\"numberOnly($event)\" readonly=\"readonly\" name=\"cpf\" formControlName=\"cpf\" value=\"{{this.cpf}}\" placeholder=\"CPF\" minlength=\"11\" maxlength=\"11\" disabled>\r\n            <input name=\"Rg\" formControlName=\"rg\" value=\"{{this.rg}}\" placeholder=\"RG\" minlength=\"9\" maxlength=\"9\" disabled>\r\n            <input (keypress)=\"letterOnly($event)\" name=\"orgaoEmissor\" formControlName=\"orgaoEmissor\" value=\"{{this.orgaoEmissor}}\" placeholder=\"Órgão emissor\" minlength=\"5\" maxlength=\"5\">\r\n            <input class=\"data\" [matDatepicker]=\"nascimento\" placeholder=\"{{this.dtNascimento | date: 'dd/MM/yyyy'}} \" minlength=\"8\" maxlength=\"8\" disabled>\r\n            <mat-datepicker-toggle matSuffix [for]=\"nascimento\"></mat-datepicker-toggle>\r\n            <mat-datepicker #nascimento></mat-datepicker>\r\n            <input (keypress)=\"letterOnly($event)\" name=\"nacionalidade\" formControlName=\"nacionalidade\" value=\"{{this.nacionalidade}}\" placeholder=\"Nacionalidade\" maxlength=\"20\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"naturalidade\" formControlName=\"naturalidade\" value=\"{{this.naturalidade}}\" placeholder=\"Naturalidade\" maxlength=\"20\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarFamiliares == false\" (click)=\"onEditarFamiliares()\">Editar informações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarFamiliares == true\" (click)=\"salvarAlteracoesFamiliares()\">Salvar alterações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarFamiliares == true\" (click)=\"onEditarFamiliares()\">Cancelar</button>\r\n<h3>Familiares</h3>\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"conteudo\">\r\n    <div class=\"esquerda\">\r\n        <p><b>Nome da mãe:</b> {{this.nomeMae}}</p>\r\n        <p><b>Sobrenome da mãe:</b> {{this.sobrenomeMae}}</p>\r\n        <p><b>Nome do pai:</b> {{this.nomePai}}</p>\r\n        <p><b>Sobrenome do pai:</b> {{this.sobrenomePai}}</p>\r\n\r\n        <small class=\"sucesso\" *ngIf=\"sucessoFamiliares==true\">Informações alteradas com sucesso</small>\r\n        <small class=\"erro\" *ngIf=\"erroFamiliares==true\">Ocorreu um erro ao alterar suas informações</small>\r\n    </div>\r\n\r\n    <div class=\"direita\">\r\n        <form [formGroup]=\"alterarFamiliaresFormGroup\" *ngIf=\"editarFamiliares == true\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"nomeMae\" formControlName=\"nomeMae\" value=\"{{this.nomeMae}}\" placeholder=\"Nome da mãe\" maxlength=\"40\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"sobrenomeMae\" formControlName=\"sobrenomeMae\" value=\"{{this.sobrenomeMae}}\" placeholder=\"Sobrenome da mãe\" maxlength=\"50\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"nomePai\" formControlName=\"nomePai\" value=\"{{this.nomePai}}\" placeholder=\"Nome do pai\" maxlength=\"40\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"sobrenomePai\" formControlName=\"sobrenomePai\" value=\"{{this.sobrenomePai}}\" placeholder=\"Sobrenome do pai\" maxlength=\"50\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-divider></mat-divider>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarContato == false\" (click)=\"onEditarContato()\">Editar informações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarContato == true\" (click)=\"salvarAlteracoesContato()\">Salvar alterações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarContato == true\" (click)=\"onEditarContato()\">Cancelar</button>\r\n<h3>Contato</h3>\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"conteudo\">\r\n    <div class=\"esquerda\">\r\n        <p><b>Email:</b> {{this.email}}</p>\r\n        <p><b>Telefone residencial:</b> {{this.telResid}}</p>\r\n        <p><b>Telefone celular:</b> {{this.telCel}}</p>\r\n        <small class=\"sucesso\" *ngIf=\"sucessoContato==true\">Informações alteradas com sucesso</small>\r\n        <small class=\"erro\" *ngIf=\"erroContato==true\">Ocorreu um erro ao alterar suas informações</small>\r\n    </div>\r\n    <div class=\"direita\">\r\n        <form [formGroup]=\"alterarContatoFormGroup\" *ngIf=\"editarContato == true\">\r\n            <input name=\"email\" formControlName=\"email\" value=\"{{this.email}}\" placeholder=\"Email\" maxlength=\"30\">\r\n            <input (keypress)=\"numberOnly($event)\" name=\"telResid\" formControlName=\"telResid\" value=\"{{this.telResid}}\" placeholder=\"Telefone residencial\" minlength=\"8\" maxlength=\"10\">\r\n            <input (keypress)=\"numberOnly($event)\" name=\"telCel\" formControlName=\"telCel\" value=\"{{this.telCel}}\" placeholder=\"Telefone celular\" minlength=\"9\" maxlength=\"11\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-divider></mat-divider>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarEndereco == false\" (click)=\"onEditarEndereco()\">Editar informações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarEndereco == true\" (click)=\"salvarAlteracoesEndereco()\">Salvar alterações</button>\r\n<button mat-raised-button class=\"alterarInfo\" *ngIf=\"editarEndereco == true\" (click)=\"onEditarEndereco()\">Cancelar</button>\r\n<h3>Endereço</h3>\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"conteudo\">\r\n    <div class=\"esquerda\">\r\n        <p><b>CEP:</b> {{this.cep}}</p>\r\n        <p><b>Logradouro:</b> {{this.logradouro}}</p>\r\n        <p><b>Número:</b> {{this.numero}}</p>\r\n        <p><b>Complemento: </b> {{this.complemento}}</p>\r\n        <p><b>Bairro:</b> {{this.bairro}}</p>\r\n        <p><b>Cidade:</b> {{this.cidade}}</p>\r\n        <p><b>Estado:</b> {{this.siglaEstado}}</p>\r\n        <small class=\"sucesso\" *ngIf=\"sucessoEndereco==true\">Informações alteradas com sucesso</small>\r\n        <small class=\"erro\" *ngIf=\"erroEndereco==true\">Ocorreu um erro ao alterar suas informações</small>\r\n    </div>\r\n    <div class=\"direita\">\r\n        <form [formGroup]=\"alterarEnderecoFormGroup\" *ngIf=\"editarEndereco == true\">\r\n            <input (keypress)=\"numberOnly($event)\" name=\"cep\" formControlName=\"cep\" value=\"{{this.cep}}\" placeholder=\"cep\" minlength=\"8\" maxlength=\"8\" (blur)=\"onBuscaCEP()\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"logradouro\" formControlName=\"logradouro\" value=\"{{this.logradouro}}\" placeholder=\"logradouro\" maxlength=\"50\">\r\n            <input (keypress)=\"numberOnly($event)\" name=\"numero\" formControlName=\"numero\" value=\"{{this.numero}}\" placeholder=\"numero\" maxlength=\"5\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"complemento\" formControlName=\"complemento\" value=\"{{this.complemento}}\" placeholder=\"complemento\" maxlength=\"30\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"bairro\" formControlName=\"bairro\" value=\"{{this.bairro}}\" placeholder=\"bairro\" maxlength=\"20\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"cidade\" formControlName=\"cidade\" value=\"{{this.cidade}}\" placeholder=\"cidade\" maxlength=\"30\">\r\n            <input (keypress)=\"letterOnly($event)\" name=\"siglaEstado\" formControlName=\"siglaEstado\" value=\"{{this.siglaEstado}}\" placeholder=\"siglaEstado\" minlength=\"2\" maxlength=\"2\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<mat-divider></mat-divider>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    \r\n    <h1>Alterar senha</h1>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n\r\n    <form [formGroup]=\"alterarSenhaFormGroup\">\r\n\r\n        <p><input type=\"password\" name=\"antigaSenha\" formControlName=\"antigaSenha\" placeholder=\"Insira sua senha atual\" minlength=\"8\" maxlength=\"15\"></p>\r\n        <p><input type=\"password\" name=\"novaSenha\" formControlName=\"novaSenha\" placeholder=\"Insira sua nova senha\" minlength=\"8\" maxlength=\"15\"></p>            \r\n        <p><input type=\"password\" name=\"confirmacaoNovaSenha\" formControlName=\"confirmacaoNovaSenha\" placeholder=\"Confirme sua nova senha\" minlength=\"8\" maxlength=\"15\"></p>\r\n        <br>\r\n        \r\n        <button mat-button (click)=\"alterarSenha()\" [disabled]=\"alterarSenhaFormGroup.invalid\">Confirmar Alteração</button>\r\n        <br>\r\n        <p *ngIf=\"alterarSenhaFormGroup.invalid && alterarSenhaFormGroup.touched\"><small>Algum campo possui informações inválidas!</small></p>\r\n        <small class=\"erro\" *ngIf=\"erro == true\">Algo deu Errado!</small>\r\n        <small class=\"sucesso\" *ngIf=\"sucesso == true\">Sucesso!</small>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/configuracoes.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/configuracoes.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"menu\">\r\n        <button (click)=\"onDados()\">Alterar Dados Pessoais</button>\r\n        <button (click)=\"onSenha()\">Alterar Senha</button>\r\n        <button (click)=\"onConta()\">Desativar Conta</button>\r\n    </div>\r\n    <div class=\"conteudo\">\r\n        <app-alterar-info *ngIf=\"dados == true\"></app-alterar-info>\r\n        <app-alterar-senha *ngIf=\"senha == true\"></app-alterar-senha> \r\n        <app-inativar-conta *ngIf=\"conta == true\"></app-inativar-conta>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    <h1>Desativar conta</h1>\r\n    <mat-divider></mat-divider>\r\n    <h4>Deseja realmente desativar a sua conta do InternetBanking?</h4>\r\n    <p>Para desativar sua conta, por favor insira sua senha de acesso.</p>\r\n\r\n    <form [formGroup]=\"inativarContaFormGroup\">\r\n        <p><input type=\"password\" name=\"senhaAcesso\" formControlName=\"senhaAcesso\" placeholder=\"Senha de acesso\" minlength=\"8\" maxlength=\"15\"></p>\r\n        <p *ngIf=\"inativarContaFormGroup.invalid && inativarContaFormGroup.touched\"><small>Algum campo possui informações inváilidas!</small></p>\r\n\r\n        <button mat-button (click)=\"inativarConta()\" [disabled]=\"inativarContaFormGroup.invalid\">Desativar Conta</button>\r\n        <div *ngIf=\"erro==true\">\r\n        <br>\r\n            <p>\r\n                <small>\r\n                    Não foi possível desativar sua conta.\r\n                </small>\r\n            <br>\r\n                <small>\r\n                    Você digitou alguma informação incorretamente,\r\n                </small>\r\n            <br>    \r\n                <small>\r\n                    ou ainda há saldo existente na conta.\r\n                </small>\r\n            </p>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/deposito/deposito.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/deposito/deposito.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Faça aqui seu <b>depósito</b></h1>\r\n<mat-divider></mat-divider>\r\n<br>\r\n<br>\r\n<form [formGroup]=\"form\">\r\n    <p><input type=\"number\" placeholder=\"Valor (R$)\" formControlName=\"valor\"></p>\r\n    <p><input type=\"password\" placeholder=\"Senha de transações\" formControlName=\"senhaTransacoes\"></p>\r\n    <p><button mat-button (click)=\"onDeposito()\">Depositar</button></p>\r\n    <br>\r\n    <small class=\"erro\" *ngIf=\"erro == true\">Algo deu Errado!</small>\r\n    <small class=\"sucesso\" *ngIf=\"sucesso == true\">Sucesso!</small>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/extrato/extrato.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/extrato/extrato.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <ng-container matColumnDef=\"dtTransacao\">\r\n        <th mat-header-cell *matHeaderCellDef> <b>Data</b> </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n            <p>{{element.dtTransacao}} </p>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"idTipoTransacao\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"aaa\"> <b>Histórico</b> </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"aaa\">\r\n            <p *ngIf=\"element.idTipoTransacao == 1\"> &nbsp; Depósito &nbsp; </p>\r\n            <p *ngIf=\"element.idTipoTransacao == 2\"> &nbsp; Saque &nbsp;</p>\r\n            <p *ngIf=\"element.idTipoTransacao == 3 && element.numeroContaOrigem == element.numeroConta\"> &nbsp; Transferência feita para: {{element.numeroContaDestino}} &nbsp; </p>\r\n            <p *ngIf=\"element.idTipoTransacao == 3 && element.numeroContaDestino == element.numeroConta\"> &nbsp; Transferência recebida de: {{element.numeroContaOrigem}} &nbsp; </p>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"valor\">\r\n        <th mat-header-cell *matHeaderCellDef> <b>Valor</b></th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n            <p><b *ngIf=\"element.idTipoTransacao == 2 || element.idTipoTransacao == 3 && element.numeroContaOrigem == element.numeroConta\">-</b> R$ {{element.valor}}</p>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[10]\" showFirstLastButtons></mat-paginator>\r\n\r\n<div>\r\n    <button mat-button (click)=\"refresh()\">Atualizar</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu-lateral\">\r\n    <button mat-button (click)=\"onInicio()\" autofocus>Início</button>\r\n    <br>\r\n    <button mat-button (click)=\"onExtrato()\">Extrato</button>\r\n    <br>\r\n    <button mat-button (click)=\"onDeposito()\">Depósito</button>\r\n    <br>\r\n    <button mat-button (click)=\"onSaque()\">Saque</button>\r\n    <br>\r\n    <button mat-button (click)=\"onTransferencia()\">Transferência</button>  \r\n    <br>\r\n    <button mat-button class=\"botaoSaldo\" (click)=\"onSaldo()\">{{this.infoSaldo}}</button>\r\n\r\n        <div *ngIf=\"saldo == true\" class=\"saldo\">\r\n            <app-saldo></app-saldo>\r\n        </div>\r\n\r\n    <button mat-button (click)=\"onConfig()\" class=\"botaoConfig\">Configurações</button>\r\n    <br>\r\n        <div *ngIf=\"config == true\" class=\"config\">\r\n            <button mat-button (click)=\"onAlterarDados()\">Alterar Dados Pessoais</button>\r\n            <br>\r\n            <button mat-button (click)=\"onAlterarSenha()\">Alterar Senha</button>\r\n            <br>\r\n            <button mat-button (click)=\"onDesativarConta()\">Desativar Conta</button>\r\n        </div>\r\n    \r\n    <button mat-button (click)=\"logout()\" class=\"logout\">Encerrar Sessão</button> \r\n</div>\r\n\r\n<div class=\"conteudo\">\r\n    <mat-progress-bar mode=\"determinate\" value=100></mat-progress-bar>\r\n    <app-infos-conta *ngIf=\"inicio == true\"></app-infos-conta>\r\n    <app-extrato *ngIf=\"extrato == true\"></app-extrato>\r\n    <app-deposito *ngIf=\"deposito == true\"></app-deposito>\r\n    <app-saque *ngIf=\"saque == true\"></app-saque>\r\n    <app-transferencia *ngIf=\"transferencia == true\"></app-transferencia>\r\n\r\n    <app-alterar-info *ngIf=\"alterarDados == true\"></app-alterar-info>\r\n    <app-alterar-senha *ngIf=\"alterarSenha == true\"></app-alterar-senha>\r\n    <app-inativar-conta *ngIf=\"desativarConta == true\"></app-inativar-conta>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/infos-conta/infos-conta.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/infos-conta/infos-conta.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Bem-vindo ao <b>InternetBanking!</b></h1>\r\n<mat-divider></mat-divider>\r\n<br>\r\n<br>\r\n\r\n<p>Olá, {{this.nome}}</p>\r\n<p>Conta-corrente: {{this.numeroConta}}</p>\r\n<p>Agência: 000{{this.numeroAgencia}}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/saque/saque.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/saque/saque.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Faça aqui seu <b>saque</b></h1>\r\n<mat-divider></mat-divider>\r\n<form [formGroup]=\"form\"> \r\n    <br>\r\n    <br>    \r\n    <p><input type=\"number\" placeholder=\"Valor (R$)\" formControlName=\"valor\"></p>\r\n    <p><input type=\"password\" placeholder=\"Senha de transações\" formControlName=\"senhaTransacoes\"></p>\r\n    <p><button mat-button (click)=\"onSaque()\">Sacar</button></p>\r\n    <br>\r\n    <small class=\"erro\" *ngIf=\"erro == true\">Algo deu Errado!</small>\r\n    <small class=\"sucesso\" *ngIf=\"sucesso == true\">Sucesso!</small>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/shared/saldo/saldo.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/shared/saldo/saldo.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    Saldo Atual: R$ {{this.saldoAtual}}\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/transferencia/transferencia.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/transferencia/transferencia.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Faça aqui sua <b>transferência</b></h1>\r\n<mat-divider></mat-divider>\r\n<br>\r\n<br>\r\n<form [formGroup]=\"form\">      \r\n    <p><input type=\"number\" placeholder=\"Nº da Conta a ser Transferido\" formControlName=\"numeroContaDestino\"></p>\r\n    <p><input type=\"number\" placeholder=\"Valor (R$)\" formControlName=\"valor\"></p>\r\n    <p><input type=\"password\" placeholder=\"Senha de Transações\" formControlName=\"senhaTransacoes\"></p>\r\n    <p><button mat-button (click)=\"onTransferencia()\">Transferir</button></p>\r\n    <br>\r\n    <small class=\"erro\" *ngIf=\"erro == true\">Algo deu Errado!</small>\r\n    <small class=\"sucesso\" *ngIf=\"sucesso == true\">Sucesso!</small>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"topnav\">\r\n    <li><a [routerLink]=\"['']\">Início</a></li>\r\n    <li><a [routerLink]=\"['/ativar']\">Reativar conta</a></li>\r\n    <li class=\"right\"><a (click)=\"toggleShow()\">Entre na sua Conta</a></li>\r\n    <li class=\"right\"><a [routerLink]=\"['/cadastro']\">Abra sua Conta</a></li>\r\n</ul>\r\n\r\n<div class=\"box-login\" *ngIf=\"isShown\">\r\n    <app-login (cpf)=\"recebeCpf($event)\"></app-login>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"background\">\r\n    <div class=\"container\">\r\n        <div class=\"content\">\r\n            <h1>Internet Banking</h1>\r\n            <h3>Livre-se das preocupações!</h3>\r\n            <p><button [routerLink]=\"['/cadastro']\" class=\"botao\"><b>Abra sua conta já!</b></button></p>\r\n            <h3>Precisa reativar sua conta?</h3>\r\n            <p><button class=\"botao\" [routerLink]=\"['/ativar']\"><b>Reative já!</b></button></p>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"content-overlay\">\r\n        <div class=\"content\">\r\n            <form class=\"form-login\" [formGroup]=\"loginForm\" (submit)=\"login()\">\r\n                <h2 class=\"titulo\">Login</h2>\r\n                \r\n                <mat-form-field>\r\n                    <input (keypress)=\"numberOnly($event)\" type=\"text\" matInput placeholder=\"CPF\" formControlName=\"cpf\" ngModel maxlength=\"11\" autofocus>\r\n                </mat-form-field>\r\n                <small *ngIf=\"loginForm.get('cpf').errors && loginForm.get('cpf').touched\" class=\"text-danger d-block\">CPF é um campo obrigatório</small>\r\n\r\n                <br>\r\n\r\n                <mat-form-field>\r\n                    <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"senhaAcesso\">\r\n                </mat-form-field>\r\n                <small *ngIf=\"loginForm.get('senhaAcesso').errors && loginForm.get('senhaAcesso').touched\" class=\"text-danger d-block\">Senha é um campo obrigatório</small>\r\n\r\n                <div class=\"button\">\r\n                    <button mat-raised-button>Entrar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/grid-menu/grid-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/grid-menu/grid-menu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize='5px'>\r\n    <mat-grid-tile>\r\n        CARD COM OS DADOS DA CONTA\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        CARD COM DEPÓSITO\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        CARD COM SAQUE\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        CARD COM TRANSFERÊNCIA\r\n    </mat-grid-tile>\r\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _erros_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./erros/not-found/not-found.component */ "./src/app/erros/not-found/not-found.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _ativar_conta_ativar_conta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ativar-conta/ativar-conta.component */ "./src/app/ativar-conta/ativar-conta.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'feed/:cpf', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"] },
    { path: 'ativar', component: _ativar_conta_ativar_conta_component__WEBPACK_IMPORTED_MODULE_8__["AtivarContaComponent"] },
    { path: '**', component: _erros_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.title = 'internetbanking';
        this.usuario = [];
        console.log(http);
        http.get('http://localhost:5000/').subscribe(usuario => this.usuario = usuario);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_grid_menu_grid_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/grid-menu/grid-menu.module */ "./src/grid-menu/grid-menu.module.ts");
/* harmony import */ var _cadastro_cadastro_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cadastro/cadastro.module */ "./src/app/cadastro/cadastro.module.ts");
/* harmony import */ var _erros_erros_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./erros/erros.module */ "./src/app/erros/erros.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _feed_feed_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feed/feed.module */ "./src/app/feed/feed.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _feed_infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feed/infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var _feed_infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feed/infos-conta/infos-conta.module */ "./src/app/feed/infos-conta/infos-conta.module.ts");
/* harmony import */ var _ativar_conta_ativar_conta_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ativar-conta/ativar-conta.component */ "./src/app/ativar-conta/ativar-conta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _ativar_conta_ativar_conta_component__WEBPACK_IMPORTED_MODULE_19__["AtivarContaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            src_grid_menu_grid_menu_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
            _cadastro_cadastro_module__WEBPACK_IMPORTED_MODULE_11__["CadastroModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _erros_erros_module__WEBPACK_IMPORTED_MODULE_12__["ErrosModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_13__["LoginModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _feed_feed_module__WEBPACK_IMPORTED_MODULE_14__["FeedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_15__["HomeModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_16__["HeaderModule"],
            _feed_infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_18__["InfosContaModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"]
        ],
        providers: [_feed_infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_17__["InfoContaService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ativar-conta/ativar-conta.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ativar-conta/ativar-conta.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    width: 100vw;\r\n    height: 92vh;\r\n    background-image: url('background.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.container{\r\n    margin-left: -14px;\r\n}\r\n.content{\r\n    width: 50vw;\r\n    padding: 10px;\r\n    height: 92vh;\r\n    background-color: whitesmoke;\r\n}\r\n.botao{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.botao button{\r\n    color: white;\r\n    background-color: #5D8BE8;\r\n    border: none;\r\n    height: 40px;\r\n    width: 160px;\r\n}\r\nh3{\r\n    text-align: center;\r\n    color: #5D8BE8;\r\n}\r\np{\r\n    text-align: center;\r\n}\r\ninput{\r\n    width: 25vw;\r\n    text-align: center;\r\n}\r\n.data{\r\n    width: 22.2vw;\r\n}\r\nform .dados{\r\n    justify-content: center;\r\n}\r\n.sucesso{\r\n    color: green;\r\n}\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRpdmFyLWNvbnRhL2F0aXZhci1jb250YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1Q0FBb0Q7SUFDcEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdGl2YXItY29udGEvYXRpdmFyLWNvbnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTJ2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmJvdGFve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm90YW8gYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzVEOEJFODtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgICB3aWR0aDogMjIuMnZ3O1xyXG59XHJcblxyXG5mb3JtIC5kYWRvc3tcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3VjZXNzb3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm97XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/ativar-conta/ativar-conta.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ativar-conta/ativar-conta.component.ts ***!
  \********************************************************/
/*! exports provided: AtivarContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivarContaComponent", function() { return AtivarContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_configuracoes_alterar_senha_alterar_senha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feed/configuracoes/alterar-senha/alterar-senha.service */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.service.ts");
/* harmony import */ var _ativar_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ativar-conta.service */ "./src/app/ativar-conta/ativar-conta.service.ts");






let AtivarContaComponent = class AtivarContaComponent {
    constructor(alterarSenhaService, ativarContaService, router, formBuilder) {
        this.alterarSenhaService = alterarSenhaService;
        this.ativarContaService = ativarContaService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ativar = false;
        this.sucesso = false;
        this.erro = false;
    }
    ngOnInit() {
        this.AtivarContaFormGroup = this.formBuilder.group({
            rg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]],
            cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            dtNascimento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required /*, Validators.minLength(8), Validators.maxLength(15)*/]],
            senhaAcesso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            senhaTransacoes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]]
        });
    }
    getIndexCPF() {
        const getCpf = this.cpf;
        return this.alterarSenhaService.getInfoClienteLogin()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoClienteLogin()));
    }
    onInfoClienteLogin() {
        return this.alterarSenhaService.getInfoClienteLogin()
            .subscribe(clientex => {
            this.cpf = clientex[this.indexCPF].cpf;
        });
    }
    onAtivar() {
        this.getIndexCPF();
        this.onInfoClienteLogin();
        const newStatus = this.AtivarContaFormGroup.getRawValue();
        this.ativarContaService
            .ativarConta(newStatus)
            .subscribe(() => {
            this.AtivarContaFormGroup.reset();
            this.reload();
            this.sucesso = true;
            this.erro = false;
        }, err => {
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
        });
    }
    reload() {
        this.router.navigate(['']);
    }
};
AtivarContaComponent.ctorParameters = () => [
    { type: _feed_configuracoes_alterar_senha_alterar_senha_service__WEBPACK_IMPORTED_MODULE_4__["AlterarSenhaService"] },
    { type: _ativar_conta_service__WEBPACK_IMPORTED_MODULE_5__["AtivarContaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AtivarContaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ativar-conta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ativar-conta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ativar-conta/ativar-conta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ativar-conta.component.css */ "./src/app/ativar-conta/ativar-conta.component.css")).default]
    })
], AtivarContaComponent);



/***/ }),

/***/ "./src/app/ativar-conta/ativar-conta.service.ts":
/*!******************************************************!*\
  !*** ./src/app/ativar-conta/ativar-conta.service.ts ***!
  \******************************************************/
/*! exports provided: AtivarContaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivarContaService", function() { return AtivarContaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
let AtivarContaService = class AtivarContaService {
    constructor(http) {
        this.http = http;
        this.apiStatus = API + "/api/conta/ativar";
    }
    ativarConta(status) {
        return this
            .http.put(this.apiStatus, status, { headers: { 'Content-Type': 'application/json' } });
    }
};
AtivarContaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AtivarContaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AtivarContaService);



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.banner {\r\n    background-image: url('group-of-people-having-neon-party-1684187.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 450px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.banner h3 {\r\n    color: white;\r\n    /* text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff; */\r\n    font-size: 60px;\r\n    margin-top: 200px;\r\n}\r\n\r\n.cadastro-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.cadastro {\r\n    display: flex;\r\n    justify-content: center;\r\n    min-width: 300px;\r\n    padding-top: 30px;\r\n    width: 70vw;\r\n    border-radius: 10px;\r\n}\r\n\r\n.halfDiv {\r\n    width: 45.8%;\r\n    border-style: none;\r\n    border-bottom-style: solid;\r\n    margin-right: 10px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.fullDiv {\r\n    width: 93.4%;\r\n    border-style: none;\r\n    border-bottom-style: solid;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w-475 {\r\n    width: 47.5%;\r\n}\r\n\r\n.stepper {\r\n    background-color: white;\r\n    border-radius: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0VBQW1GO0lBQ25GLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNklBQTZJO0lBQzdJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ncm91cC1vZi1wZW9wbGUtaGF2aW5nLW5lb24tcGFydHktMTY4NDE4Ny5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lciBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjZmZmLCAtMnB4IDAgMCAjZmZmLCAwIDJweCAwICNmZmYsIDAgLTJweCAwICNmZmYsIDFweCAxcHggI2ZmZiwgLTFweCAtMXB4IDAgI2ZmZiwgMXB4IC0xcHggMCAjZmZmLCAtMXB4IDFweCAwICNmZmY7ICovXHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuLmNhZGFzdHJvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uY2FkYXN0cm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaGFsZkRpdiB7XHJcbiAgICB3aWR0aDogNDUuOCU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mdWxsRGl2IHtcclxuICAgIHdpZHRoOiA5My40JTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnctNDc1IHtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxufVxyXG5cclxuLnN0ZXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro.service */ "./src/app/cadastro/cadastro.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








class MyErrorStateMatcher {
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    }
}
let CadastroComponent = class CadastroComponent {
    constructor(router, servico, _formBuilder, http) {
        this.router = router;
        this.servico = servico;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.matcher = new MyErrorStateMatcher();
        this.Foto = null;
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.dadosPessoaisFormGroup = this._formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            sobrenome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)]],
            rg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]],
            orgaoEmissor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            dtNascimento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nacionalidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            naturalidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
        this.FamiliaresFormGroup = this._formBuilder.group({
            nomeMae: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            sobrenomeMae: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            nomePai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            sobrenomePai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]]
        });
        this.contatoFormGroup = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            telResid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            telCel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
        });
        this.enderecoFormGroup = this._formBuilder.group({
            logradouro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            complemento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            cidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            siglaEstado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            cep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)]]
        });
        this.clienteLoginFormGroup = this._formBuilder.group({
            senhaAcesso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            confirmacaoSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]]
        }, { validator: this.checkPasswords });
        this.senhaFormGroup = this._formBuilder.group({
            senhaTransacoes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]]
        });
        this.fotoFormGroup = this._formBuilder.group({
            foto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    fileProgress(fileInput) {
        this.Foto = fileInput.target.files[0];
    }
    onCadastro() {
        const cliente = this.dadosPessoaisFormGroup.getRawValue();
        const familiares = this.FamiliaresFormGroup.getRawValue();
        const contato = this.contatoFormGroup.getRawValue();
        const endereco = this.enderecoFormGroup.getRawValue();
        let clienteLogin = this.clienteLoginFormGroup.getRawValue();
        let senhaTransacoes = this.senhaFormGroup.getRawValue();
        clienteLogin.cpf = cliente.cpf;
        this.servico
            .cadastro(cliente, familiares, contato, endereco, clienteLogin, senhaTransacoes)
            .subscribe(() => console.log("Usuário cadastrado!"), err => console.log(err));
    }
    onUpload() {
        const cliente = this.dadosPessoaisFormGroup.getRawValue();
        this.selectedFile = this.Foto;
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL + '/api/upload/' + cliente.cpf, uploadData, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(event => {
            console.log(event);
            this.router.navigate(['']);
        });
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    letterOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) &&
            charCode != 32 && (charCode < 128 || charCode > 144) && (charCode < 147 || charCode > 154) &&
            (charCode < 160 || charCode > 165) && (charCode < 181 || charCode > 183) &&
            (charCode < 198 || charCode > 199) && (charCode < 97 || charCode > 122) &&
            (charCode < 210 || charCode > 216) && charCode != 222 && charCode != 224 &&
            (charCode < 226 || charCode > 229) && (charCode < 233 || charCode > 237) &&
            charCode != 96 && charCode != 126 && charCode != 239) {
            return false;
        }
        return true;
    }
    checkPasswords(group) {
        let pass = group.controls.senhaAcesso.value;
        let confirmPass = group.controls.confirmacaoSenha.value;
        return pass === confirmPass ? null : { notSame: true };
    }
    onBuscaCEP() {
        const endereco = this.enderecoFormGroup.getRawValue();
        this.servico.buscaCEP(endereco.cep)
            .subscribe(address => this.enderecoFormGroup = this._formBuilder.group({
            logradouro: [address.logradouro, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            complemento: [address.complemento, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            bairro: [address.bairro, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            cidade: [address.localidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            siglaEstado: [address.uf, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            cep: [address.cep.replace("-", ""), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)]]
        }));
    }
};
CadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_5__["CadastroService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadastro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.component.html")).default,
        providers: [{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
            }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")).default]
    })
], CadastroComponent);



/***/ }),

/***/ "./src/app/cadastro/cadastro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroModule", function() { return CadastroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










let CadastroModule = class CadastroModule {
};
CadastroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        exports: [
            _cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"]
        ],
        providers: [],
        bootstrap: []
    })
], CadastroModule);



/***/ }),

/***/ "./src/app/cadastro/cadastro.service.ts":
/*!**********************************************!*\
  !*** ./src/app/cadastro/cadastro.service.ts ***!
  \**********************************************/
/*! exports provided: CadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroService", function() { return CadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
let CadastroService = class CadastroService {
    constructor(http) {
        this.http = http;
    }
    cadastro(cliente, familiares, contato, endereco, clienteLogin, conta) {
        cliente.ClienteLogin = new Array();
        cliente.Familiares = new Array();
        cliente.Contatos = new Array();
        cliente.Endereco = new Array();
        cliente.Conta = new Array();
        cliente.ClienteLogin.push(clienteLogin);
        cliente.Familiares.push(familiares);
        cliente.Contatos.push(contato);
        cliente.Endereco.push(endereco);
        cliente.Conta.push(conta);
        return this
            .http.post(API + '/api/Clientes', cliente, { headers: { 'Content-Type': 'application/json' } });
    }
    buscaCEP(cep) {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
};
CadastroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CadastroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], CadastroService);



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.teste = true;
    }
    cpf(cpf) {
        this.cpff = cpf;
    }
    canActivate(route, state) {
        if (this.userService.isLogged() == this.teste) {
            this.teste = false;
            console.log(route.toString().substring(11, 12));
            console.log(state.toString().substring(11, 12));
            if (route.toString().substring(11, 12) == "f") {
                return true;
            }
            this.router.navigate(["feed/" + this.cpff]);
        }
        this.teste = true;
        if (route.toString().substring(11, 12) == "a") {
            return true;
        }
        else if (route.toString().substring(11, 12) == "c") {
            return true;
        }
        else if (route.toString().substring(11, 12) == "") {
            return true;
        }
        this.router.navigate([""]);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






const API = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
let AuthService = class AuthService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    autenticar(cpf, senhaAcesso) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(API + '/api/token', { cpf, senhaAcesso }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            const authToken = res.body.token;
            this.userService.setToken(authToken);
            console.log(`User ${cpf} authenticated with token ${authToken}`);
            console.log(res);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/core/token/token.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/token/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const KEY = 'authToken';
let TokenService = class TokenService {
    hasToken() {
        return !!this.getToken();
    }
    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }
    getToken() {
        return window.localStorage.getItem(KEY);
    }
    removeToken() {
        window.localStorage.removeItem(KEY);
    }
};
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TokenService);



/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");





let UserService = class UserService {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tokenService.hasToken() && this.decode();
    }
    setToken(token) {
        this.tokenService.setToken(token);
        this.decode();
    }
    getUser() {
        return this.userSubject.asObservable();
    }
    decode() {
        const token = this.tokenService.getToken();
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        this.userSubject.next(user);
    }
    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }
    isLogged() {
        return this.tokenService.hasToken();
    }
};
UserService.ctorParameters = () => [
    { type: _token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/erros/erros.module.ts":
/*!***************************************!*\
  !*** ./src/app/erros/erros.module.ts ***!
  \***************************************/
/*! exports provided: ErrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrosModule", function() { return ErrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/erros/not-found/not-found.component.ts");




let ErrosModule = class ErrosModule {
};
ErrosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ErrosModule);



/***/ }),

/***/ "./src/app/erros/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/erros/not-found/not-found.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Mvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Vycm9zL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/erros/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/erros/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/erros/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/erros/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-info/alterar-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-info/alterar-info.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    text-align: justify;\r\n}\r\n\r\nh3 {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-divider {\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    margin-left: 10px;\r\n}\r\n\r\n.conteudo {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.esquerda {\r\n    width: 50%;\r\n}\r\n\r\n.direita {\r\n    width: 50%;\r\n    transition: 5s 5s active 5s;\r\n}\r\n\r\n.direita input {\r\n    margin-bottom: 9px;\r\n    width: 100%;\r\n}\r\n\r\n.direita .data {\r\n    width: 90.79%;\r\n}\r\n\r\nbutton {\r\n    float: right;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n\r\n.alterarInfo {\r\n    margin-left: 5px;\r\n}\r\n\r\n.sucesso{\r\n    color: green;\r\n}\r\n\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9jb25maWd1cmFjb2VzL2FsdGVyYXItaW5mby9hbHRlcmFyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvY29uZmlndXJhY29lcy9hbHRlcmFyLWluZm8vYWx0ZXJhci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZXVkbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5lc3F1ZXJkYSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZGlyZWl0YSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogNXMgNXMgYWN0aXZlIDVzO1xyXG59XHJcblxyXG4uZGlyZWl0YSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpcmVpdGEgLmRhdGEge1xyXG4gICAgd2lkdGg6IDkwLjc5JTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCA2MiwgMTA3KTtcclxufVxyXG5cclxuLmFsdGVyYXJJbmZvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5zdWNlc3Nve1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-info/alterar-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-info/alterar-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlterarInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarInfoComponent", function() { return AlterarInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _alterar_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alterar-info.service */ "./src/app/feed/configuracoes/alterar-info/alterar-info.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var src_app_cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cadastro/cadastro.service */ "./src/app/cadastro/cadastro.service.ts");







let AlterarInfoComponent = class AlterarInfoComponent {
    constructor(activatedRoute, infoContaService, alterarInfoService, formBuilder, servico) {
        this.activatedRoute = activatedRoute;
        this.infoContaService = infoContaService;
        this.alterarInfoService = alterarInfoService;
        this.formBuilder = formBuilder;
        this.servico = servico;
        this.sucessoPerfil = false;
        this.erroPerfil = false;
        this.sucessoFamiliares = false;
        this.erroFamiliares = false;
        this.sucessoContato = false;
        this.erroContato = false;
        this.sucessoEndereco = false;
        this.erroEndereco = false;
        this.editarPerfil = false;
        this.editarFamiliares = false;
        this.editarContato = false;
        this.editarEndereco = false;
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoCliente();
        this.onInfoFamiliares();
        this.onInfoContato();
        this.onInfoEndereco();
        this.alterarPerfilFormGroup = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            sobrenome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]*$/)]],
            rg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9)]],
            orgaoEmissor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(5)]],
            dtNascimento: [''],
            nacionalidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            naturalidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]]
        });
        this.alterarFamiliaresFormGroup = this.formBuilder.group({
            nomeMae: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            sobrenomeMae: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            nomePai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            sobrenomePai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]]
        });
        this.alterarContatoFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            telResid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            telCel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
        });
        this.alterarEnderecoFormGroup = this.formBuilder.group({
            logradouro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            complemento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            cidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            siglaEstado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)]],
            cep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]*$/)]]
        });
    }
    // MÉTODO QUE ATIVA A FUNÇÃO PARA A ENTRADA DE NÚMEROS, APENAS
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    // MÉTODO QUE ATIVA A FUNÇÃO PARA A ENTRADA DE LETRAS, APENAS
    letterOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) &&
            charCode != 32 && (charCode < 128 || charCode > 144) && (charCode < 147 || charCode > 154) &&
            (charCode < 160 || charCode > 165) && (charCode < 181 || charCode > 183) &&
            (charCode < 198 || charCode > 199) && (charCode < 97 || charCode > 122) &&
            (charCode < 210 || charCode > 216) && charCode != 222 && charCode != 224 &&
            (charCode < 226 || charCode > 229) && (charCode < 233 || charCode > 237) &&
            charCode != 96 && charCode != 126 && charCode != 239) {
            return false;
        }
        return true;
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoCliente(),
            this.onInfoFamiliares(),
            this.onInfoContato(),
            this.onInfoEndereco()));
    }
    // MÉTODOS "onInfo": MÉTODOS QUE SUBSTITUEM AS INFORMAÇÕES ANTIGAS PELAS NOVAS
    onInfoCliente() {
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => {
            this.nome = clientex[this.indexCPF].nome;
            this.sobrenome = clientex[this.indexCPF].sobrenome;
            this.cpf = clientex[this.indexCPF].cpf;
            this.rg = clientex[this.indexCPF].rg;
            this.orgaoEmissor = clientex[this.indexCPF].orgaoEmissor;
            this.dtNascimento = clientex[this.indexCPF].dtNascimento;
            this.dt1 = clientex[this.indexCPF].dtNascimento.toString().substring(0, 10);
            this.nacionalidade = clientex[this.indexCPF].nacionalidade;
            this.naturalidade = clientex[this.indexCPF].naturalidade;
        });
    }
    onInfoFamiliares() {
        return this.alterarInfoService.getInfoFamiliares()
            .subscribe(clientex => {
            this.nomeMae = clientex[this.indexCPF].nomeMae;
            this.sobrenomeMae = clientex[this.indexCPF].sobrenomeMae;
            this.nomePai = clientex[this.indexCPF].nomePai;
            this.sobrenomePai = clientex[this.indexCPF].sobrenomePai;
        });
    }
    onInfoContato() {
        return this.alterarInfoService.getInfoContato()
            .subscribe(clientex => {
            this.email = clientex[this.indexCPF].email;
            this.telResid = clientex[this.indexCPF].telResid;
            this.telCel = clientex[this.indexCPF].telCel;
        });
    }
    onInfoEndereco() {
        return this.alterarInfoService.getInfoEndereco()
            .subscribe(clientex => {
            this.logradouro = clientex[this.indexCPF].logradouro;
            this.numero = clientex[this.indexCPF].numero;
            this.complemento = clientex[this.indexCPF].complemento;
            this.bairro = clientex[this.indexCPF].bairro;
            this.cidade = clientex[this.indexCPF].cidade;
            this.siglaEstado = clientex[this.indexCPF].siglaEstado;
            this.cep = clientex[this.indexCPF].cep;
        });
    }
    // MÉTODOS "onEditar": MÉTODOS QUE ATIVAM A FUNÇÃO DE ALTERAR INFORMAÇÕES NA PÁGINA "alterar-info"
    onEditarPerfil() {
        if (this.editarPerfil == false) {
            this.editarPerfil = true;
        }
        else {
            this.editarPerfil = false;
        }
    }
    onEditarFamiliares() {
        if (this.editarFamiliares == false) {
            this.editarFamiliares = true;
        }
        else {
            this.editarFamiliares = false;
        }
    }
    onEditarContato() {
        if (this.editarContato == false) {
            this.editarContato = true;
        }
        else {
            this.editarContato = false;
        }
    }
    onEditarEndereco() {
        if (this.editarEndereco == false) {
            this.editarEndereco = true;
        }
        else {
            this.editarEndereco = false;
        }
    }
    // MÉTODOS "saltarAlteracoes": MÉTODOS QUE ENVIAM AS NOVAS INFORMAÇÕES PARA AS APIs
    salvarAlteracoesPerfil() {
        const newPerfil = this.alterarPerfilFormGroup.getRawValue();
        newPerfil.cpf = this.cpf;
        newPerfil.rg = this.rg;
        newPerfil.dtNascimento = this.dtNascimento;
        this.alterarInfoService
            .alterarInfoPerfil(this.cpf, newPerfil)
            .subscribe(() => {
            this.sucessoPerfil = true;
            this.erroPerfil = false;
            this.onInfoCliente();
            this.onEditarPerfil();
        }, err => {
            this.erroPerfil = true;
            this.sucessoPerfil = false;
        });
    }
    salvarAlteracoesFamiliares() {
        const newFamiliares = this.alterarFamiliaresFormGroup.getRawValue();
        this.alterarInfoService
            .alterarInfoFamiliares(this.cpf, newFamiliares)
            .subscribe(() => {
            this.sucessoFamiliares = true;
            this.erroFamiliares = false;
            this.onInfoFamiliares();
            this.onEditarFamiliares();
        }, err => {
            this.erroFamiliares = true;
            this.sucessoFamiliares = false;
        });
    }
    salvarAlteracoesContato() {
        const newContato = this.alterarContatoFormGroup.getRawValue();
        this.alterarInfoService
            .alterarInfoContato(this.cpf, newContato)
            .subscribe(() => {
            this.sucessoContato = true;
            this.erroContato = false;
            this.onInfoContato();
            this.onEditarContato();
        }, err => {
            this.sucessoContato = false;
            this.erroContato = true;
        });
    }
    salvarAlteracoesEndereco() {
        const newEndereco = this.alterarEnderecoFormGroup.getRawValue();
        this.alterarInfoService
            .alterarInfoEndereco(this.cpf, newEndereco)
            .subscribe(() => {
            this.sucessoEndereco = true;
            this.erroEndereco = false;
            this.onInfoEndereco();
            this.onEditarEndereco();
        }, err => {
            this.erroEndereco = true;
            this.sucessoEndereco = false;
        });
    }
    onBuscaCEP() {
        const endereco = this.alterarEnderecoFormGroup.getRawValue();
        this.servico.buscaCEP(endereco.cep)
            .subscribe(address => this.alterarEnderecoFormGroup = this.formBuilder.group({
            logradouro: [address.logradouro, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            complemento: [address.complemento, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            bairro: [address.bairro, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            cidade: [address.localidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            siglaEstado: [address.uf, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)]],
            cep: [address.cep.replace("-", ""), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]*$/)]]
        }));
    }
};
AlterarInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__["InfoContaService"] },
    { type: _alterar_info_service__WEBPACK_IMPORTED_MODULE_4__["AlterarInfoService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_6__["CadastroService"] }
];
AlterarInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alterar-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alterar-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-info/alterar-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alterar-info.component.css */ "./src/app/feed/configuracoes/alterar-info/alterar-info.component.css")).default]
    })
], AlterarInfoComponent);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-info/alterar-info.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-info/alterar-info.module.ts ***!
  \************************************************************************/
/*! exports provided: AlterarInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarInfoModule", function() { return AlterarInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alterar_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alterar-info.component */ "./src/app/feed/configuracoes/alterar-info/alterar-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AlterarInfoModule = class AlterarInfoModule {
};
AlterarInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_alterar_info_component__WEBPACK_IMPORTED_MODULE_4__["AlterarInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_alterar_info_component__WEBPACK_IMPORTED_MODULE_4__["AlterarInfoComponent"]]
    })
], AlterarInfoModule);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-info/alterar-info.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-info/alterar-info.service.ts ***!
  \*************************************************************************/
/*! exports provided: AlterarInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarInfoService", function() { return AlterarInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
let AlterarInfoService = class AlterarInfoService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:5000/api/";
        this.apiCliente = this.url + "Clientes/";
        this.apiFamiliares = this.url + "Familiares";
        this.apiContato = this.url + "Contato";
        this.apiEnderecos = this.url + "Enderecos";
    }
    // MÉTODOS QUE RETORNAM AS INFORMAÇÕES
    getInfoCliente() {
        return this.http.get(this.apiCliente);
    }
    getInfoFamiliares() {
        return this.http.get(this.apiFamiliares);
    }
    getInfoContato() {
        return this.http.get(this.apiContato);
    }
    getInfoEndereco() {
        return this.http.get(this.apiEnderecos);
    }
    // MÉTODOS QUE ALTERAM AS INFORMAÇÕES
    alterarInfoPerfil(cpf, perfil) {
        const apiClientes = '/api/Clientes/' + cpf;
        return this
            .http.put(API + apiClientes, perfil, { headers: { 'Content-Type': 'application/json' } });
    }
    alterarInfoFamiliares(cpf, familiares) {
        const apiFamiliares = '/api/Familiares/' + cpf;
        return this
            .http.put(API + apiFamiliares, familiares, { headers: { 'Content-Type': 'application/json' } });
    }
    alterarInfoContato(cpf, contato) {
        const apiContato = '/api/Contato/' + cpf;
        return this
            .http.put(API + apiContato, contato, { headers: { 'Content-Type': 'application/json' } });
    }
    alterarInfoEndereco(cpf, endereco) {
        const apiEndereco = '/api/Enderecos/' + cpf;
        return this
            .http.put(API + apiEndereco, endereco, { headers: { 'Content-Type': 'application/json' } });
    }
};
AlterarInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlterarInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlterarInfoService);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content{\r\n    height: 88.7vh;\r\n}\r\n\r\nform input{\r\n    width: 23vw;\r\n}\r\n\r\nmat-divider{\r\n    margin-bottom: 10px;\r\n}\r\n\r\nsmall {\r\n    color: red;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n\r\n.sucesso{\r\n    color: green;\r\n}\r\n\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9jb25maWd1cmFjb2VzL2FsdGVyYXItc2VuaGEvYWx0ZXJhci1zZW5oYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvY29uZmlndXJhY29lcy9hbHRlcmFyLXNlbmhhL2FsdGVyYXItc2VuaGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4OC43dmg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogMjN2dztcclxufVxyXG5cclxubWF0LWRpdmlkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ4QkU4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDYyLCAxMDcpO1xyXG59XHJcblxyXG4uc3VjZXNzb3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm97XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MustMatch, AlterarSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaComponent", function() { return AlterarSenhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _alterar_senha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alterar-senha.service */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.service.ts");





function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}
let AlterarSenhaComponent = class AlterarSenhaComponent {
    constructor(alterarSenhaService, formBuilder, activatedRoute) {
        this.alterarSenhaService = alterarSenhaService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.sucesso = false;
        this.erro = false;
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoClienteLogin();
        this.alterarSenhaFormGroup = this.formBuilder.group({
            antigaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]],
            novaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]],
            confirmacaoNovaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]]
        }, { validator: MustMatch('novaSenha', 'confirmacaoNovaSenha') });
    }
    checkPasswords(group) {
        let pass = group.controls.novaSenha.value;
        let confirmPass = group.controls.confirmacaoNovaSenha.value;
        return pass === confirmPass ? null : { notSame: true };
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.alterarSenhaService.getInfoClienteLogin()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoClienteLogin()));
    }
    onInfoClienteLogin() {
        return this.alterarSenhaService.getInfoClienteLogin()
            .subscribe(clientex => {
            this.cpf = clientex[this.indexCPF].cpf;
        });
    }
    alterarSenha() {
        const newClienteLogin = this.alterarSenhaFormGroup.getRawValue();
        this.alterarSenhaService
            .alterarSenha(this.cpf, newClienteLogin)
            .subscribe(() => {
            this.reload(),
                this.sucesso = true;
            this.erro = false;
        }, err => {
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
        });
    }
    reload() {
        window.location.reload();
    }
};
AlterarSenhaComponent.ctorParameters = () => [
    { type: _alterar_senha_service__WEBPACK_IMPORTED_MODULE_4__["AlterarSenhaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AlterarSenhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alterar-senha',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alterar-senha.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alterar-senha.component.css */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.css")).default]
    })
], AlterarSenhaComponent);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-senha/alterar-senha.module.ts ***!
  \**************************************************************************/
/*! exports provided: AlterarSenhaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaModule", function() { return AlterarSenhaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _alterar_senha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alterar-senha.component */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.component.ts");






let AlterarSenhaModule = class AlterarSenhaModule {
};
AlterarSenhaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_alterar_senha_component__WEBPACK_IMPORTED_MODULE_5__["AlterarSenhaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
        ],
        exports: [_alterar_senha_component__WEBPACK_IMPORTED_MODULE_5__["AlterarSenhaComponent"]]
    })
], AlterarSenhaModule);



/***/ }),

/***/ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/feed/configuracoes/alterar-senha/alterar-senha.service.ts ***!
  \***************************************************************************/
/*! exports provided: AlterarSenhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaService", function() { return AlterarSenhaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
let AlterarSenhaService = class AlterarSenhaService {
    constructor(http) {
        this.http = http;
        this.apiClienteLogin = API + "/api/ClienteLogin/";
    }
    getInfoClienteLogin() {
        return this.http.get(this.apiClienteLogin);
    }
    alterarSenha(cpf, clienteLogin) {
        return this
            .http.put(this.apiClienteLogin + cpf, clienteLogin, { headers: { 'Content-Type': 'application/json' } });
    }
};
AlterarSenhaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AlterarSenhaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AlterarSenhaService);



/***/ }),

/***/ "./src/app/feed/configuracoes/configuracoes.component.css":
/*!****************************************************************!*\
  !*** ./src/app/feed/configuracoes/configuracoes.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    background-color: rgb(236, 236, 236);\r\n}\r\n\r\n.menu{\r\n    float: left;\r\n    width: 20vw;\r\n    background-color: darkcyan;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu button{\r\n    border-style: none;\r\n    color: white;\r\n    background-color: mediumaquamarine;\r\n    height: 50px;\r\n}\r\n\r\n.menu button:hover{\r\n    background-color: aquamarine;\r\n    color: black;\r\n}\r\n\r\n.conteudo{\r\n    margin-left: 25px;\r\n    margin-top: 25px;\r\n    float: right;\r\n    width: 80vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9jb25maWd1cmFjb2VzL2NvbmZpZ3VyYWNvZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9jb25maWd1cmFjb2VzL2NvbmZpZ3VyYWNvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1lbnUgYnV0dG9ue1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLm1lbnUgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRldWRve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/feed/configuracoes/configuracoes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feed/configuracoes/configuracoes.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfiguracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function() { return ConfiguracoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfiguracoesComponent = class ConfiguracoesComponent {
    constructor() {
        this.dados = true;
        this.senha = false;
        this.conta = false;
    }
    ngOnInit() {
    }
    onDados() {
        this.conta = false;
        this.senha = false;
        this.dados = true;
    }
    onSenha() {
        this.conta = false;
        this.senha = true;
        this.dados = false;
    }
    onConta() {
        this.conta = true;
        this.senha = false;
        this.dados = false;
    }
};
ConfiguracoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuracoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/configuracoes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuracoes.component.css */ "./src/app/feed/configuracoes/configuracoes.component.css")).default]
    })
], ConfiguracoesComponent);



/***/ }),

/***/ "./src/app/feed/configuracoes/configuracoes.module.ts":
/*!************************************************************!*\
  !*** ./src/app/feed/configuracoes/configuracoes.module.ts ***!
  \************************************************************/
/*! exports provided: ConfiguracoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function() { return ConfiguracoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _configuracoes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracoes.component */ "./src/app/feed/configuracoes/configuracoes.component.ts");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");
/* harmony import */ var _alterar_senha_alterar_senha_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alterar-senha/alterar-senha.module */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.module.ts");
/* harmony import */ var _alterar_info_alterar_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alterar-info/alterar-info.module */ "./src/app/feed/configuracoes/alterar-info/alterar-info.module.ts");
/* harmony import */ var _inativar_conta_inativar_conta_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inativar-conta/inativar-conta.module */ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.module.ts");










let ConfiguracoesModule = class ConfiguracoesModule {
};
ConfiguracoesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_configuracoes_component__WEBPACK_IMPORTED_MODULE_5__["ConfiguracoesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _alterar_senha_alterar_senha_module__WEBPACK_IMPORTED_MODULE_7__["AlterarSenhaModule"],
            _alterar_info_alterar_info_module__WEBPACK_IMPORTED_MODULE_8__["AlterarInfoModule"],
            _inativar_conta_inativar_conta_module__WEBPACK_IMPORTED_MODULE_9__["InativarContaModule"]
        ],
        exports: [_configuracoes_component__WEBPACK_IMPORTED_MODULE_5__["ConfiguracoesComponent"]],
        entryComponents: []
    })
], ConfiguracoesModule);



/***/ }),

/***/ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content{\r\n    height: 88.7vh;\r\n}\r\n\r\nform input{\r\n    width: 23vw;\r\n}\r\n\r\nmat-divider{\r\n    margin-bottom: 10px;\r\n}\r\n\r\nsmall {\r\n    color: red;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9jb25maWd1cmFjb2VzL2luYXRpdmFyLWNvbnRhL2luYXRpdmFyLWNvbnRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2NvbmZpZ3VyYWNvZXMvaW5hdGl2YXItY29udGEvaW5hdGl2YXItY29udGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4OC43dmg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogMjN2dztcclxufVxyXG5cclxubWF0LWRpdmlkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ4QkU4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDYyLCAxMDcpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InativarContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InativarContaComponent", function() { return InativarContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inativar_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inativar-conta.service */ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");







let InativarContaComponent = class InativarContaComponent {
    constructor(router, activatedRoute, formBuilder, infoContaService, inativarContaService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.infoContaService = infoContaService;
        this.inativarContaService = inativarContaService;
        this.userService = userService;
        this.erro = false;
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoCliente();
        this.inativarContaFormGroup = this.formBuilder.group({
            senhaAcesso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]]
        });
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoCliente()));
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
    onInfoCliente() {
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => {
            this.cpf = clientex[this.indexCPF].cpf;
        });
    }
    inativarConta() {
        this.getIndexCPF();
        this.onInfoCliente();
        const newClienteLogin = this.inativarContaFormGroup.getRawValue();
        this.inativarContaService
            .inativarConta(this.cpf, newClienteLogin)
            .subscribe(() => this.logout(), err => {
            console.log("Erro ao desativar conta");
            this.erro = true;
        });
    }
    reload() {
        alert("Informações alteradas com sucesso!");
        window.location.reload();
    }
};
InativarContaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__["InfoContaService"] },
    { type: _inativar_conta_service__WEBPACK_IMPORTED_MODULE_4__["InativarContaService"] },
    { type: src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
InativarContaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inativar-conta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inativar-conta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inativar-conta.component.css */ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.css")).default]
    })
], InativarContaComponent);



/***/ }),

/***/ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/feed/configuracoes/inativar-conta/inativar-conta.module.ts ***!
  \****************************************************************************/
/*! exports provided: InativarContaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InativarContaModule", function() { return InativarContaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _inativar_conta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inativar-conta.component */ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let InativarContaModule = class InativarContaModule {
};
InativarContaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inativar_conta_component__WEBPACK_IMPORTED_MODULE_4__["InativarContaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_inativar_conta_component__WEBPACK_IMPORTED_MODULE_4__["InativarContaComponent"]]
    })
], InativarContaModule);



/***/ }),

/***/ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/feed/configuracoes/inativar-conta/inativar-conta.service.ts ***!
  \*****************************************************************************/
/*! exports provided: InativarContaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InativarContaService", function() { return InativarContaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
let InativarContaService = class InativarContaService {
    constructor(http) {
        this.http = http;
        this.apiConta = API + "/api/Conta/";
        this.apiClienteLogin = API + "/api/clienteLogin/";
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
    getInfoLogin() {
        return this.http.get(this.apiClienteLogin);
    }
    inativarConta(cpf, conta) {
        return this
            .http.put(this.apiConta + cpf, conta, { headers: { 'Content-Type': 'application/json' } });
    }
};
InativarContaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
InativarContaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], InativarContaService);



/***/ }),

/***/ "./src/app/feed/deposito/deposito.component.css":
/*!******************************************************!*\
  !*** ./src/app/feed/deposito/deposito.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    margin-top: 20px;\r\n}\r\n\r\nb{\r\n    color: #5D8BE8;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n\r\ninput{\r\n    width: 25vw;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.sucesso{\r\n    color: green;\r\n}\r\n\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9kZXBvc2l0by9kZXBvc2l0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9kZXBvc2l0by9kZXBvc2l0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5ie1xyXG4gICAgY29sb3I6ICM1RDhCRTg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RDhCRTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgNjIsIDEwNyk7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN1Y2Vzc297XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJve1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/feed/deposito/deposito.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/feed/deposito/deposito.component.ts ***!
  \*****************************************************/
/*! exports provided: DepositoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositoComponent", function() { return DepositoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _deposito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deposito.service */ "./src/app/feed/deposito/deposito.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");






let DepositoComponent = class DepositoComponent {
    constructor(servico, infoContaService, router, activatedRoute) {
        this.servico = servico;
        this.infoContaService = infoContaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.sucesso = false;
        this.erro = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            senhaTransacoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.getIndexCPF();
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoConta()));
    }
    onInfoConta() {
        return this.infoContaService.getInfoConta()
            .subscribe(clientex => this.numeroConta = clientex[this.indexCPF].numeroConta);
    }
    onDeposito() {
        this.getIndexCPF();
        const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");
        const transacao1 = this.form.getRawValue();
        transacao1.numeroConta = this.numeroConta;
        transacao1.idTipoTransacao = 1;
        transacao1.numeroContaDestino = this.numeroConta;
        this.senhaTransacoes = transacao1.senhaTransacoes;
        this.servico.Deposito(transacao1)
            .subscribe(() => {
            this.router.navigate(['feed/' + cpf]);
            this.sucesso = true;
            this.erro = false;
        }, err => {
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
        });
        this.form.reset();
        this.sucesso = true;
    }
};
DepositoComponent.ctorParameters = () => [
    { type: _deposito_service__WEBPACK_IMPORTED_MODULE_4__["DepositoService"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__["InfoContaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], DepositoComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], DepositoComponent.prototype, "submitEM", void 0);
DepositoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deposito',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposito.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/deposito/deposito.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deposito.component.css */ "./src/app/feed/deposito/deposito.component.css")).default]
    })
], DepositoComponent);



/***/ }),

/***/ "./src/app/feed/deposito/deposito.module.ts":
/*!**************************************************!*\
  !*** ./src/app/feed/deposito/deposito.module.ts ***!
  \**************************************************/
/*! exports provided: DepositoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositoModule", function() { return DepositoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _deposito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deposito.component */ "./src/app/feed/deposito/deposito.component.ts");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");







let DepositoModule = class DepositoModule {
};
DepositoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_deposito_component__WEBPACK_IMPORTED_MODULE_5__["DepositoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
        ],
        exports: [_deposito_component__WEBPACK_IMPORTED_MODULE_5__["DepositoComponent"]],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]],
        entryComponents: []
    })
], DepositoModule);



/***/ }),

/***/ "./src/app/feed/deposito/deposito.service.ts":
/*!***************************************************!*\
  !*** ./src/app/feed/deposito/deposito.service.ts ***!
  \***************************************************/
/*! exports provided: DepositoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositoService", function() { return DepositoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DepositoService = class DepositoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.apiConta = this.API + "api/Conta";
        this.apiTransacao = this.API + '/api/Transacao';
    }
    Deposito(transacao) {
        return this
            .http.post(this.apiTransacao, transacao, { headers: { 'Content-Type': 'application/json' } });
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
};
DepositoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DepositoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], DepositoService);



/***/ }),

/***/ "./src/app/feed/extrato/extrato.component.css":
/*!****************************************************!*\
  !*** ./src/app/feed/extrato/extrato.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 98%;\r\n    background-color: white;\r\n}\r\n\r\nth {\r\n    color: darkslategray;\r\n    -webkit-text-decoration: solid;\r\n            text-decoration: solid;\r\n    font-size: 22px;\r\n}\r\n\r\ntd {\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\nmat-paginator {\r\n    color: #5D8BE8;\r\n    width: 98%;\r\n}\r\n\r\n.titulo {\r\n    font-size: 40px;\r\n}\r\n\r\nb{\r\n    color: #5D8BE8;\r\n}\r\n\r\nbutton {\r\n    text-align: center;\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9leHRyYXRvL2V4dHJhdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2V4dHJhdG8vZXh0cmF0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogc29saWQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgICBjb2xvcjogIzVEOEJFODtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG5ie1xyXG4gICAgY29sb3I6ICM1RDhCRTg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ4QkU4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feed/extrato/extrato.component.ts":
/*!***************************************************!*\
  !*** ./src/app/feed/extrato/extrato.component.ts ***!
  \***************************************************/
/*! exports provided: ExtratoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoComponent", function() { return ExtratoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _extrato_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extrato.service */ "./src/app/feed/extrato/extrato.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");







let ExtratoComponent = class ExtratoComponent {
    constructor(extratoService, activatedRoute, infoContaService) {
        this.extratoService = extratoService;
        this.activatedRoute = activatedRoute;
        this.infoContaService = infoContaService;
        this.displayedColumns = ['dtTransacao', 'idTipoTransacao', 'valor'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoConta();
        this.extrato();
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.extratoService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoConta()));
    }
    extrato() {
        this.extratoService.getInfoExtrato(this.getCpf)
            .subscribe(stream => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](stream);
            this.dataSource.paginator = this.paginator;
        });
    }
    onInfoConta() {
        return this.infoContaService.getInfoConta()
            .subscribe(clientex => this.numeroConta = clientex[this.indexCPF].numeroConta);
    }
    refresh() {
        this.extrato();
    }
};
ExtratoComponent.ctorParameters = () => [
    { type: _extrato_service__WEBPACK_IMPORTED_MODULE_5__["ExtratoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_6__["InfoContaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ExtratoComponent.prototype, "paginator", void 0);
ExtratoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extrato',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./extrato.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/extrato/extrato.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./extrato.component.css */ "./src/app/feed/extrato/extrato.component.css")).default]
    })
], ExtratoComponent);



/***/ }),

/***/ "./src/app/feed/extrato/extrato.module.ts":
/*!************************************************!*\
  !*** ./src/app/feed/extrato/extrato.module.ts ***!
  \************************************************/
/*! exports provided: ExtratoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoModule", function() { return ExtratoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _extrato_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extrato.component */ "./src/app/feed/extrato/extrato.component.ts");
/* harmony import */ var _infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infos-conta/infos-conta.module */ "./src/app/feed/infos-conta/infos-conta.module.ts");









let ExtratoModule = class ExtratoModule {
};
ExtratoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_extrato_component__WEBPACK_IMPORTED_MODULE_7__["ExtratoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_8__["InfosContaModule"]
        ],
        exports: [_extrato_component__WEBPACK_IMPORTED_MODULE_7__["ExtratoComponent"]]
    })
], ExtratoModule);



/***/ }),

/***/ "./src/app/feed/extrato/extrato.service.ts":
/*!*************************************************!*\
  !*** ./src/app/feed/extrato/extrato.service.ts ***!
  \*************************************************/
/*! exports provided: ExtratoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoService", function() { return ExtratoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ExtratoService = class ExtratoService {
    constructor(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.url = "http://localhost:5000/";
        this.apiCliente = this.url + "api/Clientes";
        this.apiConta = this.url + "api/Conta";
    }
    getInfoExtrato(conta) {
        const apiExtrato = this.url + "api/Transacao/" + conta;
        return this.http.get(apiExtrato);
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
    getInfoCliente() {
        return this.http.get(this.apiCliente);
    }
};
ExtratoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ExtratoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], ExtratoService);



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conteudo mat-progress-bar{\r\n  width: 98%;\r\n}\r\n\r\n.menu-lateral{\r\n    float: left;\r\n    width: 23vw;\r\n    height: 100vh;\r\n    background-color: #5D8BE8;\r\n    position: fixed;\r\n    left: 0;\r\n}\r\n\r\n.menu-lateral button{\r\n    background-color: #5D8BE8;\r\n    font-size: large;\r\n    color: white;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 0;\r\n}\r\n\r\n.menu-lateral button:focus{\r\n  background-color: rgb(44, 44, 128);\r\n}\r\n\r\n.menu-lateral .config{\r\n  position: absolute;\r\n  width: 23vw;\r\n  z-index: 9999;\r\n  bottom: 100px;\r\n}\r\n\r\n.menu-lateral .config button{\r\n  background-color: rgb(44, 44, 128);\r\n}\r\n\r\n.menu-lateral .config button:hover{\r\n  background-color: #5D8BE8;\r\n}\r\n\r\n.menu-lateral .saldo{\r\n  position: fixed;\r\n  margin-left: 0;\r\n  margin-top: 0;\r\n  width: 23vw;\r\n  color: white;\r\n}\r\n\r\n.botaoConfig{\r\n  position: absolute;\r\n  bottom: 50px;\r\n  margin-left: -23vw;\r\n}\r\n\r\n.logout{\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.conteudo{\r\n  z-index: -999999;\r\n  float: right;\r\n  width: 75vw;\r\n  height: 100vh;\r\n  padding-top: 15px;\r\n}\r\n\r\n.saldo{\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: rgb(44, 44, 128);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLE9BQU87QUFDWDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRldWRvIG1hdC1wcm9ncmVzcy1iYXJ7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLm1lbnUtbGF0ZXJhbHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIzdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5tZW51LWxhdGVyYWwgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5tZW51LWxhdGVyYWwgYnV0dG9uOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDEyOCk7XHJcbn1cclxuXHJcbi5tZW51LWxhdGVyYWwgLmNvbmZpZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIzdnc7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4ubWVudS1sYXRlcmFsIC5jb25maWcgYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDEyOCk7XHJcbn1cclxuXHJcbi5tZW51LWxhdGVyYWwgLmNvbmZpZyBidXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxufVxyXG5cclxuLm1lbnUtbGF0ZXJhbCAuc2FsZG97XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgd2lkdGg6IDIzdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm90YW9Db25maWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTIzdnc7XHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbnRldWRve1xyXG4gIHotaW5kZXg6IC05OTk5OTk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA3NXZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zYWxkb3tcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgMTI4KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_saldo_saldo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/saldo/saldo.service */ "./src/app/feed/shared/saldo/saldo.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/user/user.service */ "./src/app/core/user/user.service.ts");






let FeedComponent = class FeedComponent {
    constructor(saldoService, activatedRoute, infoContaService, userService, router) {
        this.saldoService = saldoService;
        this.activatedRoute = activatedRoute;
        this.infoContaService = infoContaService;
        this.userService = userService;
        this.router = router;
        this.inicio = true;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.config = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.saldo = false;
        this.infoSaldo = "Saldo disponível";
    }
    ngOnInit() {
        this.getIndexCPF();
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
    onConfig() {
        if (this.config == false) {
            this.config = true;
        }
        else {
            this.config = false;
        }
    }
    onSaldo() {
        if (this.saldo == false) {
            this.infoSaldo = "Ocultar saldo";
            this.config = false;
            this.saldo = true;
        }
        else {
            this.saldo = false;
            this.infoSaldo = "Saldo disponível";
        }
    }
    onInicio() {
        this.inicio = true;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onExtrato() {
        this.inicio = false;
        this.extrato = true;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onDeposito() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = true;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onSaque() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = false;
        this.saque = true;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onTransferencia() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = true;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onAlterarDados() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = true;
        this.alterarSenha = false;
        this.desativarConta = false;
        this.config = false;
    }
    onAlterarSenha() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = true;
        this.desativarConta = false;
        this.config = false;
    }
    onDesativarConta() {
        this.inicio = false;
        this.extrato = false;
        this.deposito = false;
        this.saque = false;
        this.transferencia = false;
        this.alterarDados = false;
        this.alterarSenha = false;
        this.desativarConta = true;
        this.config = false;
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf)));
    }
    onExibeSaldo() {
        return this.saldoService.GetInfoSaldo()
            .subscribe(saldox => this.saldoAtual = saldox[this.indexCPF].saldoAtual);
    }
};
FeedComponent.ctorParameters = () => [
    { type: _shared_saldo_saldo_service__WEBPACK_IMPORTED_MODULE_3__["SaldoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__["InfoContaService"] },
    { type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")).default]
    })
], FeedComponent);



/***/ }),

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");
/* harmony import */ var _infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infos-conta/infos-conta.module */ "./src/app/feed/infos-conta/infos-conta.module.ts");
/* harmony import */ var _extrato_extrato_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extrato/extrato.module */ "./src/app/feed/extrato/extrato.module.ts");
/* harmony import */ var _deposito_deposito_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deposito/deposito.module */ "./src/app/feed/deposito/deposito.module.ts");
/* harmony import */ var _saque_saque_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./saque/saque.module */ "./src/app/feed/saque/saque.module.ts");
/* harmony import */ var _transferencia_transferencia_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transferencia/transferencia.module */ "./src/app/feed/transferencia/transferencia.module.ts");
/* harmony import */ var _configuracoes_configuracoes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuracoes/configuracoes.module */ "./src/app/feed/configuracoes/configuracoes.module.ts");
/* harmony import */ var _configuracoes_alterar_senha_alterar_senha_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuracoes/alterar-senha/alterar-senha.module */ "./src/app/feed/configuracoes/alterar-senha/alterar-senha.module.ts");
/* harmony import */ var _configuracoes_alterar_info_alterar_info_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configuracoes/alterar-info/alterar-info.module */ "./src/app/feed/configuracoes/alterar-info/alterar-info.module.ts");
/* harmony import */ var _configuracoes_inativar_conta_inativar_conta_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./configuracoes/inativar-conta/inativar-conta.module */ "./src/app/feed/configuracoes/inativar-conta/inativar-conta.module.ts");
















let FeedModule = class FeedModule {
};
FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _infos_conta_infos_conta_module__WEBPACK_IMPORTED_MODULE_7__["InfosContaModule"],
            _extrato_extrato_module__WEBPACK_IMPORTED_MODULE_8__["ExtratoModule"],
            _deposito_deposito_module__WEBPACK_IMPORTED_MODULE_9__["DepositoModule"],
            _saque_saque_module__WEBPACK_IMPORTED_MODULE_10__["SaqueModule"],
            _configuracoes_configuracoes_module__WEBPACK_IMPORTED_MODULE_12__["ConfiguracoesModule"],
            _transferencia_transferencia_module__WEBPACK_IMPORTED_MODULE_11__["TransferenciaModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _configuracoes_alterar_senha_alterar_senha_module__WEBPACK_IMPORTED_MODULE_13__["AlterarSenhaModule"],
            _configuracoes_alterar_info_alterar_info_module__WEBPACK_IMPORTED_MODULE_14__["AlterarInfoModule"],
            _configuracoes_inativar_conta_inativar_conta_module__WEBPACK_IMPORTED_MODULE_15__["InativarContaModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
        ]
    })
], FeedModule);



/***/ }),

/***/ "./src/app/feed/infos-conta/Infos-conta.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/feed/infos-conta/Infos-conta.service.ts ***!
  \*********************************************************/
/*! exports provided: InfoContaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoContaService", function() { return InfoContaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let InfoContaService = class InfoContaService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:5000/api/";
        this.apiCliente = this.url + "Clientes";
        this.apiConta = this.url + "Conta";
        this.apiAgencia = this.url + "Agencia";
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
    getInfoCliente() {
        return this.http.get(this.apiCliente);
    }
    getInfoAgencia() {
        return this.http.get(this.apiAgencia);
    }
};
InfoContaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
InfoContaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], InfoContaService);



/***/ }),

/***/ "./src/app/feed/infos-conta/infos-conta.component.css":
/*!************************************************************!*\
  !*** ./src/app/feed/infos-conta/infos-conta.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: #5D8BE8;\r\n    width: 100vw;\r\n    height: 92.5vh;\r\n}\r\n\r\nb{\r\n    color: #5D8BE8;\r\n}\r\n\r\nh1{\r\n    margin-top: 20px;\r\n}\r\n\r\np{\r\n    font-size: 30px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 95%;\r\n}\r\n\r\nbutton {\r\n    text-align: center;\r\n    background-color: darkslategray;\r\n    color: white;\r\n    margin-top: -10px;\r\n}\r\n\r\n.centralizar-botao {\r\n    text-align: center;\r\n}\r\n\r\n.content {\r\n    width: 70vw;\r\n    height: 80vh;\r\n    background-color: white;\r\n    color: black;\r\n    text-align: center;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9pbmZvcy1jb250YS9pbmZvcy1jb250YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvaW5mb3MtY29udGEvaW5mb3MtY29udGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOEJFODtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTIuNXZoO1xyXG59XHJcblxyXG5ie1xyXG4gICAgY29sb3I6ICM1RDhCRTg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmNlbnRyYWxpemFyLWJvdGFvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/feed/infos-conta/infos-conta.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/feed/infos-conta/infos-conta.component.ts ***!
  \***********************************************************/
/*! exports provided: InfosContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosContaComponent", function() { return InfosContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");







let InfosContaComponent = class InfosContaComponent {
    constructor(userService, infoContaService, activatedRoute, router) {
        this.userService = userService;
        this.infoContaService = infoContaService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            saldo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            valorDeposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    submit() {
        if (this.form.valid) {
            this.submitEM.emit(this.form.value);
        }
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoCliente();
        this.onInfoConta();
        this.onInfoAgencia();
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoConta()));
    }
    onInfoCliente() {
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => {
            this.nome = clientex[this.indexCPF].nome;
            this.sobrenome = clientex[this.indexCPF].sobrenome;
        });
    }
    onInfoConta() {
        return this.infoContaService.getInfoConta()
            .subscribe(clientex => this.numeroConta = clientex[this.indexCPF].numeroConta);
    }
    // AGENCIA SEMPRE TERÁ A MESMA POSIÇÃO ATÉ TER OUTRAS AGENCIAS.
    onInfoAgencia() {
        return this.infoContaService.getInfoAgencia()
            .subscribe(clientex => this.numeroAgencia = clientex[0].numeroAgencia);
    }
};
InfosContaComponent.ctorParameters = () => [
    { type: src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__["InfoContaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], InfosContaComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], InfosContaComponent.prototype, "submitEM", void 0);
InfosContaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infos-conta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./infos-conta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/infos-conta/infos-conta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./infos-conta.component.css */ "./src/app/feed/infos-conta/infos-conta.component.css")).default]
    })
], InfosContaComponent);



/***/ }),

/***/ "./src/app/feed/infos-conta/infos-conta.module.ts":
/*!********************************************************!*\
  !*** ./src/app/feed/infos-conta/infos-conta.module.ts ***!
  \********************************************************/
/*! exports provided: InfosContaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosContaModule", function() { return InfosContaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _infos_conta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infos-conta.component */ "./src/app/feed/infos-conta/infos-conta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");







let InfosContaModule = class InfosContaModule {
};
InfosContaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_infos_conta_component__WEBPACK_IMPORTED_MODULE_3__["InfosContaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
        ],
        exports: [_infos_conta_component__WEBPACK_IMPORTED_MODULE_3__["InfosContaComponent"]]
    })
], InfosContaModule);



/***/ }),

/***/ "./src/app/feed/saque/saque.component.css":
/*!************************************************!*\
  !*** ./src/app/feed/saque/saque.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    margin-top: 20px;\r\n}\r\n\r\ninput{\r\n    width: 25vw;\r\n}\r\n\r\nb{\r\n    color: #5D8BE8;;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.sucesso{\r\n    color: green;\r\n}\r\n\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9zYXF1ZS9zYXF1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9zYXF1ZS9zYXF1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG59XHJcblxyXG5ie1xyXG4gICAgY29sb3I6ICM1RDhCRTg7O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ4QkU4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDYyLCAxMDcpO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdWNlc3Nve1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/feed/saque/saque.component.ts":
/*!***********************************************!*\
  !*** ./src/app/feed/saque/saque.component.ts ***!
  \***********************************************/
/*! exports provided: SaqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaqueComponent", function() { return SaqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _saque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saque.service */ "./src/app/feed/saque/saque.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");






let SaqueComponent = class SaqueComponent {
    constructor(servico, infoContaService, router, activatedRoute) {
        this.servico = servico;
        this.infoContaService = infoContaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            senhaTransacoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.erro = false;
        this.sucesso = false;
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onInfoConta();
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoConta()));
    }
    onInfoConta() {
        return this.infoContaService.getInfoConta()
            .subscribe(clientex => this.numeroConta = clientex[this.indexCPF].numeroConta);
    }
    onSaque() {
        this.getIndexCPF();
        const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");
        const transacao2 = this.form.getRawValue();
        transacao2.numeroConta = this.numeroConta;
        transacao2.idTipoTransacao = 2;
        transacao2.numeroContaOrigem = this.numeroConta;
        this.senhaTransacoes = transacao2.senhaTransacoes;
        this.servico.Saque(transacao2).subscribe(() => {
            this.router.navigate(['feed/' + cpf]);
            this.sucesso = true;
            this.erro = false;
        }, err => {
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
        });
        this.form.reset();
    }
};
SaqueComponent.ctorParameters = () => [
    { type: _saque_service__WEBPACK_IMPORTED_MODULE_4__["SaqueService"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_5__["InfoContaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], SaqueComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], SaqueComponent.prototype, "submitEM", void 0);
SaqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saque',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saque.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/saque/saque.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saque.component.css */ "./src/app/feed/saque/saque.component.css")).default]
    })
], SaqueComponent);



/***/ }),

/***/ "./src/app/feed/saque/saque.module.ts":
/*!********************************************!*\
  !*** ./src/app/feed/saque/saque.module.ts ***!
  \********************************************/
/*! exports provided: SaqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaqueModule", function() { return SaqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _saque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saque.component */ "./src/app/feed/saque/saque.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");







let SaqueModule = class SaqueModule {
};
SaqueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_saque_component__WEBPACK_IMPORTED_MODULE_3__["SaqueComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"]
        ],
        exports: [_saque_component__WEBPACK_IMPORTED_MODULE_3__["SaqueComponent"]],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]],
        entryComponents: []
    })
], SaqueModule);



/***/ }),

/***/ "./src/app/feed/saque/saque.service.ts":
/*!*********************************************!*\
  !*** ./src/app/feed/saque/saque.service.ts ***!
  \*********************************************/
/*! exports provided: SaqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaqueService", function() { return SaqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
let SaqueService = class SaqueService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.apiConta = this.API + "api/Conta";
        this.apiTransacao = this.API + '/api/Transacao';
    }
    Saque(transacao) {
        return this
            .http.post(this.apiTransacao, transacao, { headers: { 'Content-Type': 'application/json' } });
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
};
SaqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SaqueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SaqueService);



/***/ }),

/***/ "./src/app/feed/shared/saldo/saldo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/feed/shared/saldo/saldo.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content{\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9zaGFyZWQvc2FsZG8vc2FsZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvc2hhcmVkL3NhbGRvL3NhbGRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/feed/shared/saldo/saldo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/feed/shared/saldo/saldo.component.ts ***!
  \******************************************************/
/*! exports provided: SaldoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoComponent", function() { return SaldoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _saldo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saldo.service */ "./src/app/feed/shared/saldo/saldo.service.ts");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");





let SaldoComponent = class SaldoComponent {
    constructor(saldoService, activatedRoute, infoContaService) {
        this.saldoService = saldoService;
        this.activatedRoute = activatedRoute;
        this.infoContaService = infoContaService;
    }
    ngOnInit() {
        this.getIndexCPF();
        this.onSaldo();
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf, this.onSaldo())));
    }
    onSaldo() {
        this.getIndexCPF();
        return this.saldoService.GetInfoSaldo()
            .subscribe(saldox => this.saldoAtual = saldox[this.indexCPF].saldoAtual);
    }
};
SaldoComponent.ctorParameters = () => [
    { type: _saldo_service__WEBPACK_IMPORTED_MODULE_3__["SaldoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__["InfoContaService"] }
];
SaldoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saldo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saldo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/shared/saldo/saldo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saldo.component.css */ "./src/app/feed/shared/saldo/saldo.component.css")).default]
    })
], SaldoComponent);



/***/ }),

/***/ "./src/app/feed/shared/saldo/saldo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/feed/shared/saldo/saldo.module.ts ***!
  \***************************************************/
/*! exports provided: SaldoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoModule", function() { return SaldoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _saldo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saldo.component */ "./src/app/feed/shared/saldo/saldo.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let SaldoModule = class SaldoModule {
};
SaldoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_saldo_component__WEBPACK_IMPORTED_MODULE_3__["SaldoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ],
        exports: [_saldo_component__WEBPACK_IMPORTED_MODULE_3__["SaldoComponent"]]
    })
], SaldoModule);



/***/ }),

/***/ "./src/app/feed/shared/saldo/saldo.service.ts":
/*!****************************************************!*\
  !*** ./src/app/feed/shared/saldo/saldo.service.ts ***!
  \****************************************************/
/*! exports provided: SaldoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoService", function() { return SaldoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SaldoService = class SaldoService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:5000/";
        this.apiConta = this.url + "api/conta";
    }
    GetInfoSaldo() {
        return this.http.get(this.apiConta);
    }
};
SaldoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SaldoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], SaldoService);



/***/ }),

/***/ "./src/app/feed/transferencia/transferencia.component.css":
/*!****************************************************************!*\
  !*** ./src/app/feed/transferencia/transferencia.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    margin-top: 20px;\r\n}\r\n\r\nb{\r\n    color: #5D8BE8;;\r\n}\r\n\r\nbutton{\r\n    background-color: #5D8BE8;\r\n    color: white;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: rgb(39, 62, 107);\r\n}\r\n\r\ninput{\r\n    width: 25vw;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.sucesso{\r\n    color: green;\r\n}\r\n\r\n.erro{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC90cmFuc2ZlcmVuY2lhL3RyYW5zZmVyZW5jaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvdHJhbnNmZXJlbmNpYS90cmFuc2ZlcmVuY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmJ7XHJcbiAgICBjb2xvcjogIzVEOEJFODs7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RDhCRTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgNjIsIDEwNyk7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN1Y2Vzc297XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJve1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/feed/transferencia/transferencia.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feed/transferencia/transferencia.component.ts ***!
  \***************************************************************/
/*! exports provided: TransferenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaComponent", function() { return TransferenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infos-conta/Infos-conta.service */ "./src/app/feed/infos-conta/Infos-conta.service.ts");
/* harmony import */ var _transferencia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transferencia.service */ "./src/app/feed/transferencia/transferencia.service.ts");






let TransferenciaComponent = class TransferenciaComponent {
    constructor(infoContaService, router, activatedRoute, servico) {
        this.infoContaService = infoContaService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.servico = servico;
        this.submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sucesso = false;
        this.erro = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            numeroContaDestino: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            senhaTransacoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    submit() { }
    ngOnInit() {
        this.getIndexCPF();
    }
    getIndexCPF() {
        const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');
        return this.infoContaService.getInfoCliente()
            .subscribe(clientex => (this.indexCPF = clientex.findIndex(obj => obj.cpf == getCpf),
            this.onInfoConta()));
    }
    onInfoConta() {
        return this.infoContaService.getInfoConta()
            .subscribe(clientex => this.numeroConta = clientex[this.indexCPF].numeroConta);
    }
    onTransferencia() {
        this.getIndexCPF();
        const cpf = this.activatedRoute.snapshot.paramMap.get("cpf");
        const transacao3 = this.form.getRawValue();
        transacao3.numeroConta = this.numeroConta;
        transacao3.numeroContaOrigem = this.numeroConta;
        transacao3.idTipoTransacao = 3;
        this.senhaTransacoes = transacao3.senhaTransacoes;
        transacao3.numeroContaDestino = this.form.get('numeroContaDestino').value;
        this.servico.Transferecia(transacao3)
            .subscribe(() => {
            this.router.navigate(['feed/' + cpf]);
            this.sucesso = true;
            this.erro = false;
        }, err => {
            console.log("Erro de chamado");
            this.erro = true;
            this.sucesso = false;
        });
        this.form.reset();
    }
};
TransferenciaComponent.ctorParameters = () => [
    { type: _infos_conta_Infos_conta_service__WEBPACK_IMPORTED_MODULE_4__["InfoContaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _transferencia_service__WEBPACK_IMPORTED_MODULE_5__["TransferenciaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransferenciaComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TransferenciaComponent.prototype, "submitEM", void 0);
TransferenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transferencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transferencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/transferencia/transferencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transferencia.component.css */ "./src/app/feed/transferencia/transferencia.component.css")).default]
    })
], TransferenciaComponent);



/***/ }),

/***/ "./src/app/feed/transferencia/transferencia.module.ts":
/*!************************************************************!*\
  !*** ./src/app/feed/transferencia/transferencia.module.ts ***!
  \************************************************************/
/*! exports provided: TransferenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaModule", function() { return TransferenciaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transferencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transferencia.component */ "./src/app/feed/transferencia/transferencia.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/saldo/saldo.module */ "./src/app/feed/shared/saldo/saldo.module.ts");







let TransferenciaModule = class TransferenciaModule {
};
TransferenciaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_transferencia_component__WEBPACK_IMPORTED_MODULE_3__["TransferenciaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _shared_saldo_saldo_module__WEBPACK_IMPORTED_MODULE_6__["SaldoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
        ],
        exports: [_transferencia_component__WEBPACK_IMPORTED_MODULE_3__["TransferenciaComponent"]],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]],
        entryComponents: []
    })
], TransferenciaModule);



/***/ }),

/***/ "./src/app/feed/transferencia/transferencia.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/feed/transferencia/transferencia.service.ts ***!
  \*************************************************************/
/*! exports provided: TransferenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaService", function() { return TransferenciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TransferenciaService = class TransferenciaService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.apiConta = this.API + "api/Conta";
        this.apiTransacao = this.API + '/api/Transacao';
    }
    Transferecia(transacao3) {
        return this
            .http.post(this.apiTransacao, transacao3, { headers: { 'Content-Type': 'application/json' } });
    }
    getInfoConta() {
        return this.http.get(this.apiConta);
    }
};
TransferenciaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TransferenciaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], TransferenciaService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul.topnav {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n  }\r\n\r\n  .box-login{\r\n    position: absolute;\r\n    z-index: 9999;\r\n}\r\n\r\n  ul.topnav li {float: left; cursor: pointer;}\r\n\r\n  ul.topnav li a {\r\n    display: block;\r\n    color: #5D8BE8;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n  ul.topnav li a:hover:not(.active) {background-color: #5D8BE8; color: white}\r\n\r\n  ul.topnav li a.active {background-color: #5D8BE8;}\r\n\r\n  ul.topnav li.right {float: right;}\r\n\r\n  @media screen and (max-width: 600px) {\r\n    ul.topnav li.right, \r\n    ul.topnav li {float: none;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUVFLGNBQWMsV0FBVyxFQUFFLGVBQWUsQ0FBQzs7RUFFM0M7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBLG1DQUFtQyx5QkFBeUIsRUFBRSxZQUFZOztFQUUxRSx1QkFBdUIseUJBQXlCLENBQUM7O0VBRWpELG9CQUFvQixZQUFZLENBQUM7O0VBRWpDO0lBQ0U7a0JBQ2MsV0FBVyxDQUFDO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwudG9wbmF2IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC5ib3gtbG9naW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbiAgXHJcbiAgdWwudG9wbmF2IGxpIHtmbG9hdDogbGVmdDsgY3Vyc29yOiBwb2ludGVyO31cclxuICBcclxuICB1bC50b3BuYXYgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNUQ4QkU4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICB1bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICM1RDhCRTg7IGNvbG9yOiB3aGl0ZX1cclxuICBcclxuICB1bC50b3BuYXYgbGkgYS5hY3RpdmUge2JhY2tncm91bmQtY29sb3I6ICM1RDhCRTg7fVxyXG4gIFxyXG4gIHVsLnRvcG5hdiBsaS5yaWdodCB7ZmxvYXQ6IHJpZ2h0O31cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgdWwudG9wbmF2IGxpLnJpZ2h0LCBcclxuICAgIHVsLnRvcG5hdiBsaSB7ZmxvYXQ6IG5vbmU7fVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isShown = false;
    }
    ngOnInit() { }
    toggleShow() {
        this.isShown = !this.isShown;
    }
    recebeCpf(RespFilho) {
        console.log("A resposta é: ", RespFilho);
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.module */ "./src/app/login/login.module.ts");







let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"]
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
        ]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background{\r\n    width: 100vw;\r\n    height: 91.5vh;\r\n    background-image: url('background.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.container{\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 50vw;\r\n    height: 40vh;\r\n}\r\n.content{\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.titulo{\r\n    float: right;\r\n    color: white;\r\n    text-align: center;\r\n}\r\nbutton{\r\n    color: #5D8BE8;\r\n    background-color: white;\r\n    border: none;\r\n    font-size: larger;\r\n    height: 50px;\r\n    width: 200px;\r\n}\r\nh3, h1{\r\n    color: white;\r\n}\r\nh1{\r\n     font-size: 72px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHVDQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtLQUNLLGVBQWU7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA5MS41dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICM1RDhCRTg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5oMywgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgIGZvbnQtc2l6ZTogNzJweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  position: absolute;\r\n  margin-left: 72vw ;\r\n}\r\n\r\np{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 40%;\r\n    min-width: 300px;\r\n  }\r\n\r\n.error {\r\n    padding: 16px;\r\n    width: 300px;\r\n    color: white;\r\n    background-color: red;\r\n  }\r\n\r\n.titulo{\r\n    display: flex;\r\n    justify-content: center;\r\n    color: #262626;\r\n    padding-top: 30px;\r\n  }\r\n\r\n.button {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 10px;\r\n  }\r\n\r\nbutton{\r\n    background-color: #262626;\r\n    color: white;\r\n    border-radius: 10px;\r\n    border-style: none;\r\n    width: 50%;\r\n    height: 50px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.content{\r\n    background-color: white;\r\n    border-bottom-right-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    width: 350px;\r\n    margin-top: 0;\r\n    margin-left: 0.3%;\r\n    box-shadow: -9px 9px 66px -6px rgba(0,0,0,0.75);\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\r\n  }\r\n\r\n.form-login {\r\n    text-align: center;\r\n  }\r\n\r\n.content-overlay {\r\n    width: center;\r\n    height: center;\r\n  }\r\n\r\n@media(max-width: 768px){\r\n    .content{\r\n      width: 100vw;\r\n    }\r\n    .container{\r\n      margin-left: -14px;\r\n      border-radius: 0;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVFO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsK0NBQStDO0lBQy9DLGtGQUFrRjtFQUNwRjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztBQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDcydncgO1xyXG59XHJcblxyXG5we1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAudGl0dWxve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMyU7XHJcbiAgICBib3gtc2hhZG93OiAtOXB4IDlweCA2NnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7ICovXHJcbiAgfVxyXG5cclxuICAuZm9ybS1sb2dpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1vdmVybGF5IHtcclxuICAgIHdpZHRoOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5jb250ZW50e1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.guard */ "./src/app/core/auth.guard.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, autorizacao, auth, router) {
        this.formBuilder = formBuilder;
        this.autorizacao = autorizacao;
        this.auth = auth;
        this.router = router;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            senhaAcesso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    login() {
        const cpfDigitado = this.loginForm.get('cpf').value;
        const senha = this.loginForm.get('senhaAcesso').value;
        this.auth.cpf(cpfDigitado);
        this.autorizacao.autenticar(cpfDigitado, senha)
            .subscribe(() => this.router.navigate(['feed/', cpfDigitado]), err => {
            this.loginForm.reset();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _core_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
        ],
        exports: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        providers: []
    })
], LoginModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    API_URL: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/grid-menu/grid-menu.component.css":
/*!***********************************************!*\
  !*** ./src/grid-menu/grid-menu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-grid-list{\r\n    margin: 20px;\r\n}\r\n\r\nmat-grid-tile {\r\n    background: white;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncmlkLW1lbnUvZ3JpZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvZ3JpZC1tZW51L2dyaWQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtbGlzdHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/grid-menu/grid-menu.component.ts":
/*!**********************************************!*\
  !*** ./src/grid-menu/grid-menu.component.ts ***!
  \**********************************************/
/*! exports provided: GridMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMenuComponent", function() { return GridMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GridMenuComponent = class GridMenuComponent {
};
GridMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'grid-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/grid-menu/grid-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-menu.component.css */ "./src/grid-menu/grid-menu.component.css")).default]
    })
], GridMenuComponent);



/***/ }),

/***/ "./src/grid-menu/grid-menu.module.ts":
/*!*******************************************!*\
  !*** ./src/grid-menu/grid-menu.module.ts ***!
  \*******************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _grid_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-menu.component */ "./src/grid-menu/grid-menu.component.ts");






let GridModule = class GridModule {
};
GridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _grid_menu_component__WEBPACK_IMPORTED_MODULE_5__["GridMenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
        ],
        exports: [
            _grid_menu_component__WEBPACK_IMPORTED_MODULE_5__["GridMenuComponent"]
        ]
    })
], GridModule);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\VestidoBank\InternetBanking-FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map