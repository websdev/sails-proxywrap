#!groovy
@Library('digital-jenkins-library@master')
def npmCommands = new com.digital.jenkins.NpmCommands()

// Define Kubernetes pod configuration using Kubernetes Plugin format - https://github.com/jenkinsci/kubernetes-plugin
podTemplate(
    // pod label
    label: 'sails-proxywrap-pod',
    // array of containers in pod
    containers: [
        // define container
        containerTemplate(
            name: 'node',
            image: 'node:8.11.2',
            ttyEnabled: true,
            command: 'cat',
            envVars: [
                secretEnvVar(key: 'NPM_PRIVATE_TOKEN', secretName: 'shared-secret', secretKey: 'NPM_PRIVATE_TOKEN'),
            ]
        )
    ]
)
{
  node('sails-proxywrap-pod'){
    def varSCM = checkout scm
    properties([pipelineTriggers([pollSCM('* */2 * * *')])])

    if (varSCM.GIT_BRANCH.startsWith('master')) {
      npmCommands.publishToPrivateNpm(varSCM, './package.json')
    }
  }
}