@description('Globally unique lowercase storage account name (3-24 letters and digits).')
@minLength(3)
@maxLength(24)
param storageName string

param location string = resourceGroup().location

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageName
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
  properties: {
    allowBlobPublicAccess: false
    minimumTlsVersion: 'TLS1_2'
  }
}

output storageId string = storage.id
