package br.com.pecepoli.demo.dto;

import br.com.pecepoli.demo.domain.ItemPacote;
import br.com.pecepoli.demo.domain.Localidade;

import java.util.List;

public record PacoteDTO (
    Localidade localidade,
    String descricao,
    List<ItemPacote> items
){}
