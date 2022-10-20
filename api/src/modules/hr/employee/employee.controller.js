"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.EmployeeController = void 0;
var common_1 = require("@nestjs/common");
var EmployeeController = /** @class */ (function () {
    function EmployeeController(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeController.prototype.create = function (createEmployeeDto) {
        return this.employeeService.create(createEmployeeDto);
    };
    EmployeeController.prototype.findAll = function () {
        return this.employeeService.findAll();
    };
    EmployeeController.prototype.findOne = function (id) {
        return this.employeeService.findOne(+id);
    };
    EmployeeController.prototype.update = function (id, updateEmployeeDto) {
        return this.employeeService.update(+id, updateEmployeeDto);
    };
    EmployeeController.prototype.remove = function (id) {
        return this.employeeService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], EmployeeController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], EmployeeController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmployeeController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], EmployeeController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmployeeController.prototype, "remove");
    EmployeeController = __decorate([
        (0, common_1.Controller)('employee')
    ], EmployeeController);
    return EmployeeController;
}());
exports.EmployeeController = EmployeeController;
