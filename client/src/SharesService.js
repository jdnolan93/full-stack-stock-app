const baseURL = 'http://localhost:5000/api/shares/'

export const getShares = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getShareDetails = () => {
    return fetch()
}

export const postShare = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteShare = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const getShare = (id) => {
  return fetch(baseURL + id)
      .then(res => res.json())
}

