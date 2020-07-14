import uniqid from 'uniqid'
import Person from '../src/models/person'
import { expect } from 'chai'
import request from 'supertest'
import app from '../src/index'
import mongodbConnection from '../src/config/db'

describe("test /api/event/register-new-person", () => {

    before((done) => {
        mongodbConnection("mongodb://localhost:27017/tests", done)
    })

    it("should return 200", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                lastname: uniqid(),
                email: uniqid() + "@" + uniqid() + ".com",
                eventDate: new Date().toISOString()
            }).end(async function (err, res) {
                expect(res.status).to.equal(200)
                const person = await Person.findById(res.body.person._id)
                expect(person).to.have.property("_id")
                done()
            })
    })

    it("should return 400 on missing firstname", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                lastname: uniqid(),
                email: uniqid() + "@" + uniqid() + ".com",
                eventDate: new Date().toISOString()
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("firstname")
                expect(res.body.errorResponse).to.not.have.any.keys("lastname", "email", "eventDate")
                expect(res.body.errorResponse.firstname).to.be.a("string")
                done()
            })
    })

    it("should return 400 on missing lastname", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                email: uniqid() + "@" + uniqid() + ".com",
                eventDate: new Date().toISOString()
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("lastname")
                expect(res.body.errorResponse).to.not.have.any.keys("firstname", "email", "eventDate")
                expect(res.body.errorResponse.lastname).to.be.a("string")
                done()
            })
    })

    it("should return 400 on missing email", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                lastname: uniqid(),
                eventDate: new Date().toISOString()
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("email")
                expect(res.body.errorResponse).to.not.have.any.keys("firstname", "lastname", "eventDate")
                expect(res.body.errorResponse.email).to.be.a("string")
                done()
            })
    })

    it("should return 400 on missing eventDate", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                lastname: uniqid(),
                email: uniqid() + "@" + uniqid() + ".com"
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("eventDate")
                expect(res.body.errorResponse).to.not.have.any.keys("firstname", "lastname", "email")
                expect(res.body.errorResponse.eventDate).to.be.a("string")
                done()
            })
    })

    it("should return 400 on incorrect email", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                lastname: uniqid(),
                email: uniqid(),
                eventDate: new Date().toISOString()
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("email")
                expect(res.body.errorResponse).to.not.have.any.keys("firstname", "lastname", "eventDate")
                expect(res.body.errorResponse.email).to.be.a("string")
                done()
            })
    })

    it("should return 400 on incorrect eventDate", function (done) {
        request(app)
            .post("/api/event/register-new-person")
            .send({
                firstname: uniqid(),
                lastname: uniqid(),
                email: uniqid() + "@" + uniqid() + ".com",
                eventDate: uniqid()
            }).end(async function (err, res) {
                expect(res.status).to.equal(400)
                expect(res.body.errorResponse).to.have.all.keys("eventDate")
                expect(res.body.errorResponse).to.not.have.any.keys("firstname", "lastname", "email")
                expect(res.body.errorResponse.eventDate).to.be.a("string")
                done()
            })
    })


})