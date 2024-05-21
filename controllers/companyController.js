const company = require('../models/companyModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns string
     */
    const createCompany = async (req, res) => {
        const {orgName, primaryEmail, password} = req.body // Destructuring

        if(!orgName || !primaryEmail || !password) { // Validation
            return res.json({success: false,
                message: 'Please enter required fields'
                });
            }
        try {
            // Existing Company
            const duplicateCompany = await getCompany(primaryEmail);

            if(duplicateCompany) {
                
                return res.json({
                success: false,
                message: `Company with email: ${primaryEmail} already exists.`
            });
            }
            // Password hashing
            req.body.password = await hasPassword(password, 10);

            // Company store
            await company.create(req.body);
            return res.json({
                success: true,
                message: 'Company has been created.'
            })
        } catch (error) {
          return res.json({
                success: false,
                message: 'Internal server error'
            });
        }
    }

    /**
     * 
     * @param {*} companyEmail 
     * @returns company
     */
    const getCompany = async (companyEmail) => {
        return await company.findOne({primaryEmail: companyEmail});
    }

    /**
     * 
     * @param {*} password 
     * @param {*} salt 
     * @returns hash
     */
    const hasPassword = async(password, salt) => {
        const generatedSalt = bcrypt.genSaltSync(salt);
        const hash = bcrypt.hashSync(password, generatedSalt);
        return hash;
    }

    const login = async (req, res) => {
        const {primaryEmail, password} = req.body // Destructuring

        if(!primaryEmail || !password) { // Validation
            return res.json({
                success: false,
                message: 'Please enter required fields'
                });
            }
        const company = await getCompany(primaryEmail);
        if(!company) {
            res.json({
                success: false,
                message: 'Company does not exist.'
            })
        } else {
            const isValidPassword = await validatePassword(password, company.password)
            if(!isValidPassword) {
                res.json({
                    success: false,
                    message: 'Password does not match.'
                })
            }

            const payload = await generatePayload(company)
            const token = await generateToken(payload);
            res.json({
                success: true,
                message: 'Company has been logged in.',
                data: token
            })
        }
    }

    const validatePassword = async (password, companyPassword) => {
        return await bcrypt.compare(password, companyPassword);
    }

    const generateToken = async (payload) => {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h' 
        })
    }

    const generatePayload = async (company) => {
        return {
            id: company._id,
            orgName: company.orgName,
            primaryEmail: company.primaryEmail
        }
    }

module.exports = {createCompany, login};